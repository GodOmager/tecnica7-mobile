import { StyleSheet, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../component/Header";
import Graphic from "../component/Graphic";
import AttendanceStats from "../component/AttendanceStats";
import Title from "../component/Title";
import InfoCard from "../component/InfoCard";
import AttendanceCard from "../component/AttendanceCard";

export default function Analytics() {
  const attendanceData = { present: 127, late: 5, absent: 4 };
  const studentsWithAbsences = ["Martinez Walter", "Martinez Walter", "Martinez Walter"];
  const studentsWithLates = ["Alumno 1", "Alumno 2", "Alumno 3"];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.contentContainer} style={styles.screen}>
        {/* Header */}
        <View style={{ margin: -24, marginBottom: 0 }}>
          <Header title="Resumen del Curso" />
        </View>

        {/* Promedio de asistencia */}
        <Title title="Promedio de Asistencia 2025" />
        <View style={{ marginTop: -8, marginBottom: 18 }}>
          <Graphic percentage={75} size={175} strokeWidth={38} />
        </View>
        <AttendanceStats
          stats={attendanceData} horizontal style={{ marginTop: -12 }} // opcional para ajustarlo
        />


        <View style={[styles.row, { marginTop: 24 }]}>
          <InfoCard
            icon="exclamation-circle"
            iconColor="#D9411E"
            title="5 Alumnos con Más de 7 Faltas"
            items={studentsWithAbsences}
          />
          <InfoCard
            icon="exclamation-triangle"
            iconColor="#FF9F47"
            title="5 Alumnos con Más de 7 Tardanzas"
            items={studentsWithLates}
          />
        </View>

        {/* Rendimiento académico */}
        <Title title="Rendimiento Académico" />
        <View style={styles.row}>
          <View style={{ width: "54%" }}>
            <AttendanceCard
              icon="chart-line"
              text='Promedio del Curso'
              bg="#C9DBFF"
              color="#2659BF"
              select={false}
              note = "8.5"
            />
          </View>
          <View style={{ width: "40%" }}>
            <AttendanceCard
              icon="check-circle"
              text="Rendimiento Positivo ¡A seguir así!"
              bg="#C9DBFF"
              color="#2659BF"
              select={true}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  contentContainer: {
    padding: 24,
    backgroundColor: "#f5f5f5",
    flexDirection: "column",
    
    paddingBottom: 76,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 24,
  },
});
