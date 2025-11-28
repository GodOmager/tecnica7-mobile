import { ScrollView, TouchableOpacity, Text, View, FlatList, Dimensions, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import Graphic from "./Graphic";
import AttendanceStats from "./AttendanceStats";
import ItemStudentAttendance from "./ItemStudentAttendance";

const screenWidth = Dimensions.get("window").width;

export default function AttendanceHistory() {
  const [historyData, setHistoryData] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await fetch("http://192.168.0.15:3000/attendance/daily-summary");
        const data = await res.json();
        setHistoryData(data);
      } catch (e) {}
    };
    fetchHistory();
  }, []);

  const totals = {
    present: historyData.reduce((a, d) => a + d.presentes, 0),
    late: historyData.reduce((a, d) => a + d.tardanzas, 0),
    absent: historyData.reduce((a, d) => a + d.ausentes, 0)
  };

  return (
    <ScrollView style={{ paddingBottom: 72, backgroundColor: '#f5f5f5' }}>
      <View style={{ marginTop: -8, marginBottom: 18 }}>
        <Graphic percentage={75} size={175} strokeWidth={38} />
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between", paddingBottom: 12, marginBottom: 24, borderBottomWidth: 1, borderColor: "#D9D9D9" }}>
        <TouchableOpacity style={{ height: 32, width: 32, alignItems: "center", justifyContent: "center", backgroundColor: "#C9DBFF", borderRadius: 6 }}>
          <FontAwesome5 name="search" size={12} color="#030A8C" solid />
        </TouchableOpacity>

        <AttendanceStats stats={totals} horizontal styleText={{ marginHorizontal: 8 }} />
      </View>

      <FlatList
        data={historyData}
        keyExtractor={(item, i) => i.toString()}
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