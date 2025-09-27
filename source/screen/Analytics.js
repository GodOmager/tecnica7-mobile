import { StyleSheet, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../component/Header";
import Graphic from "../component/Graphic";
import AttendanceStats from "../component/AttendanceStats";
import Title from "../component/Title";
import InfoCard from "../component/InfoCard";
import SummaryCard from "../component/SummaryCard";

export default function Analytics() {
  const attendanceData = { present: 127, late: 5, absent: 4 };
  const studentsWithAbsences = ["Martinez Walter", "Martinez Walter", "Martinez Walter"];
  const studentsWithLates = ["Alumno 1", "Alumno 2", "Alumno 3"];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.contentContainer} style={styles.screen}>
        {/* Header */}
        <View style={{ margin: -20 }}>
          <Header title="Resumen del Curso" />
        </View>

        {/* Promedio de asistencia */}
        <Title title="Promedio de Asistencia 2025" iconName="angle-down" />
        <Graphic percentage={75} size={180} strokeWidth={28} />
        <AttendanceStats
            stats={attendanceData}horizontal style={{ marginTop: -12 }} // opcional para ajustarlo
/>


        <View style={styles.row}>
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
        <Title title="Rendimiento Académico" iconName="angle-right" />
        <View style={styles.row}>
          <SummaryCard icon="chart-line" title="Promedio del Curso" value="8.5" color="#E6ECFF" />
          <SummaryCard icon="check-circle" title="Rendimiento Positivo" note="¡A seguir así!" color="#D6ECFF" />
        </View>

        <View style={styles.row}>
          <InfoCard title="4 alumnos con promedio menor a 6" items={["Martinez Walter", "Martinez Walter"]} />
          <InfoCard title="2 alumnos en Situación Crítica" items={["Martinez Walter", "Martinez Walter"]} />
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
    gap: 28,
    paddingBottom: 76,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
});
