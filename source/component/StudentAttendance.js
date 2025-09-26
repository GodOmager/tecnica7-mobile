import { View, Text, StyleSheet } from "react-native";
import Graphic from "../component/Graphic";
import AttendanceStats from "../component/AttendanceStats";
import AttendanceCard from "../component/AttendanceCard";
import AttendanceHistory from "../component/AttendanceHistory";

export default function StudentAttendance() {
  const stats = { present: 65, late: 5, absent: 8 };
  const history = [
    { date: "05/06/25", status: "Presente" },
    { date: "04/06/25", status: "Ausente" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumen Anual</Text>


      <View style={styles.gaugeSection}>
        <Graphic percentage={75} size={140} strokeWidth={22} />
        <AttendanceStats stats={stats} />
      </View>

      <View style={styles.cards}>
        <AttendanceCard
          icon="calendar-times"
          text="Presente hoy, con llegada fuera de horario"
          bg="#FFEFE0"
          color="#FF7A00"
        />
        <AttendanceCard
          icon="check-circle"
          text="¡Buena presencia en clase! Sin alertas."
          bg="#E8F0FF"
          color="#030A8C"
        />
      </View>

      <AttendanceHistory history={history} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    gap: 26,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  title: { fontSize: 18, fontWeight: "600" },
  gaugeSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },
  cards: { gap: 12 },
});
