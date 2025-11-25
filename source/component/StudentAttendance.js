import { View, Text, StyleSheet } from "react-native";

import Title from "./Title";
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
      <View>
        <Title title="Resumen Anual"></Title>
        <View style={styles.gaugeSection}>
          <View style={{ margin: -16 }}>
            <Graphic percentage={75} size={175} strokeWidth={38} />
          </View>
          <AttendanceStats stats={stats} />
        </View>
        <View style={styles.cards}>
          <View style={{width:"40%"}}>
            <AttendanceCard
              icon="calendar-day"
              text="Presente hoy, con llegada fuera de horario"
              bg="#FFDCBD"
              color="#FF9F47"
              select = {true}
            />
          </View>
          <View style={{width:"60%"}}>
            <AttendanceCard
              icon="check-circle"
              text="¡Buena presencia en clase! Sin alertas."
              bg="#C9DBFF"
              color="#2659BF"
              select = {false}
            />
          </View>
        </View>
      </View>

      <Title title="Historial"></Title>
      <AttendanceHistory history={history} />
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
});
