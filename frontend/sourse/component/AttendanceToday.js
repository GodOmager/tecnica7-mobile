import { ScrollView, TouchableOpacity, Text, View, FlatList, Dimensions, Alert, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import Graphic from "./Graphic";
import AttendanceStats from "./AttendanceStats";
import ItemStudentAttendance from "./ItemStudentAttendance";
import { API } from "../services/api";
const screenWidth = Dimensions.get("window").width;
const API_URL = "http://" + API + ":3000";

export default function AttendanceToday() {
  const [sheetId, setSheetId] = useState(null);
  const [students, setStudents] = useState([]);
  const [tempStudents, setTempStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [stats, setStats] = useState({ present: 0, late: 0, absent: 0 });

  const getInitials = (n, a) =>
    ((n?.trim()[0] || "") + (a?.trim()[0] || "")).toUpperCase();

  const loadToday = async () => {
    try {
      const todayRes = await fetch(`${API_URL}/attendance/today`);
      const today = await todayRes.json();

      if (!today.exists) {
        await fetch(`${API_URL}/attendance/create-today`, { method: "POST" });
        return loadToday();
      }

      const dateRes = await fetch(`${API_URL}/attendance/date`);
      const dateJson = await dateRes.json();
      const fecha = dateJson.simulatedDate;

      const sheetRes = await fetch(`${API_URL}/attendance/sheet/${fecha}`);
      const full = await sheetRes.json();

      const mapped = full.records.map(r => ({
        recordId: r.id,
        id: r.student.id,
        nombre: r.student.nombre,
        apellido: r.student.apellido,
        estado: r.estado
      }));

      setSheetId(full.sheet.id);
      setStudents(mapped);
      setTempStudents(JSON.parse(JSON.stringify(mapped)));

      const present = mapped.filter(s => s.estado === "present").length;
      const late = mapped.filter(s => s.estado === "late").length;
      const absent = mapped.filter(s => s.estado === "absent").length;

      setStats({ present, late, absent });
    } catch (e) {}
  };

  useEffect(() => {
    loadToday();
  }, []);

  const recalcStats = (arr) => {
    const present = arr.filter(s => s.estado === "present").length;
    const late = arr.filter(s => s.estado === "late").length;
    const absent = arr.filter(s => s.estado === "absent").length;
    setStats({ present, late, absent });
  };

  const toggleEdit = () => {
    if (!editMode) {
      setTempStudents(JSON.parse(JSON.stringify(students)));
      setEditMode(true);
    } else {
      Alert.alert("Guardar cambios", "¿Quieres guardar los cambios?", [
        {
          text: "No",
          style: "cancel",
          onPress: () => {
            setTempStudents(students);
            recalcStats(students);
            setEditMode(false);
          }
        },
        {
          text: "Sí",
          onPress: async () => {
            try {
              await fetch(`${API_URL}/attendance/sheet/${sheetId}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  records: tempStudents.map(s => ({
                    id: s.recordId,
                    estado: s.estado
                  }))
                })
              });

              setStudents(tempStudents);
              recalcStats(tempStudents);
              setEditMode(false);
              loadToday();
            } catch (e) {}
          }
        }
      ]);
    }
  };

  const updateState = (id, estado) => {
    if (!editMode) return;
    const copy = [...tempStudents];
    const i = copy.findIndex(s => s.id === id);
    copy[i].estado = copy[i].estado === estado ? null : estado;
    setTempStudents(copy);
    recalcStats(copy);
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={{ marginTop: -8, marginBottom: 18 }}>
        <Graphic
          percentage={
            tempStudents.length
              ? Math.round((stats.present / tempStudents.length) * 100)
              : 0
          }
          size={175}
          strokeWidth={38}
        />
      </View>

      <View style={styles.containerHeader}>
        <TouchableOpacity style={styles.editIcon} onPress={toggleEdit}>
          {editMode ? (
            <FontAwesome5 name="check" size={12} color="#030A8C" solid />
          ) : (
            <FontAwesome5 name="edit" size={12} color="#030A8C" solid />
          )}
        </TouchableOpacity>

        <AttendanceStats stats={stats} horizontal styleText={{ marginHorizontal: 12 }} />
      </View>

      <FlatList
        data={tempStudents}
        keyExtractor={item => item.recordId.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <Text style={{ fontSize: 16, fontWeight: 600, width: 16 }}>{item.id}</Text>
            <ItemStudentAttendance
              initials={getInitials(item.nombre, item.apellido)}
              nombreCompleto={`${item.apellido} ${item.nombre}`}
              editMode={editMode}
              estado={item.estado}
              updateState={updateState}
              id={item.id}
              style={{ width: screenWidth - 72 }}
            />
          </View>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingBottom: 72,
    backgroundColor: '#f5f5f5',
  },
  editIcon: {
    height: 32,
    width: 32,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C9DBFF",
    borderRadius: 6,
  },
  containerHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 12,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#D9D9D9",
  },
});