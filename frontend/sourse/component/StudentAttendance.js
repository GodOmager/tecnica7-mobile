import { View, Text, StyleSheet } from "react-native";
import Title from "./Title";
import Graphic from "../component/Graphic";
import AttendanceStats from "../component/AttendanceStats";
import AttendanceCard from "../component/AttendanceCard";

export default function StudentAttendance({ stats, history }) {
  const present = stats?.presentes || 0;
  const late = stats?.tardanzas || 0;
  const absent = stats?.faltas || 0;
  const percentage = stats?.porcentajeAsistencia || 0;

  const formattedHistory = (history || []).map(r => ({
    date: new Date(r.sheet?.fecha).toLocaleDateString(),
    status: r.estado ? r.estado : "Indefinido"
  }));

  return (
    <View>
      <Title title="Resumen Anual" />

      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <View style={{ margin: -16 }}>
          <Graphic percentage={percentage} size={175} strokeWidth={38} />
        </View>
        <AttendanceStats stats={{ present, late, absent }} />
      </View>

      <View style={{ display: "flex", gap: 12, marginTop: 38, flexDirection: "row" }}>
        <View style={{ width: "40%" }}>
          <AttendanceCard
            icon="calendar-day"
            text="Estado de hoy"
            bg="#FFDCBD"
            color="#FF9F47"
            select={true}
          />
        </View>

        <View style={{ width: "56%" }}>
          <AttendanceCard
            icon="check-circle"
            text="Resumen general"
            bg="#C9DBFF"
            color="#2659BF"
            select={false}
          />
        </View>
      </View>

      <Title title="Historial" />

      <View style={{ marginTop: 12, gap: 8 }}>
        {formattedHistory.map((item, i) => (
          <View key={i} style={{ backgroundColor: "#f5f5f5", padding: 10, borderRadius: 8 }}>
            <Text>{item.date} - {item.status}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  gaugeSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  cards: {
    display: "flex",
    gap: 12,
    marginTop: 38,
    flexDirection: "row"
  },
  containerHistory:{
    marginTop: 12,
    gap: 8
  },
  itemHistory:{
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 8,
  }
});
