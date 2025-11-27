import { StyleSheet, ScrollView, TouchableOpacity, Text, View, FlatList, Alert, Dimensions } from "react-native";
import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import Graphic from "./Graphic";
import AttendanceStats from "./AttendanceStats";
import initialData from "../json/students";
import ItemStudentAttendance from "./ItemStudentAttendance";

const screenWidth = Dimensions.get("window").width;

export default function AttendanceHistory() {
  const attendanceData = { present: "1025", late: "18", absent: "25" };
  {/* Copia de los datos de estudiantes temporal (cuando se edita y se cancela se vuelve a como estaba antes) */ }
  const [historyData, setHistoryData] = useState([
    {
      id: 1,
      fecha: "2025-07-15",
      presentes: 24,
      tardanzas: 3,
      ausentes: 5
    },
    {
      id: 2,
      fecha: "2025-07-14",
      presentes: 22,
      tardanzas: 4,
      ausentes: 6
    },
  ]);


  return (
    <ScrollView style={styles.screen}>

      <View style={{ marginTop: -8, marginBottom: 18 }}>
        <Graphic percentage={75} size={175} strokeWidth={38} />
      </View>

      <View style={styles.containerHeader}>

        {/* Boton de Buscar */}
        <TouchableOpacity style={styles.editIcon} >
          <FontAwesome5 name="search" size={12} color="#030A8C" solid />
        </TouchableOpacity>

        {/* Total */}
        <AttendanceStats stats={attendanceData} horizontal styleText={{ marginHorizontal: 8 }} />

      </View>

      <FlatList
        data={historyData}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
              <ItemStudentAttendance
                history={true}
                fecha={item.fecha}
                presentes={item.presentes}
                tardanzas={item.tardanzas}
                ausentes={item.ausentes}
                style={{ width: screenWidth - 48 }}
              />
          </View>
        )}
      />

    </ScrollView>
  )
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