import { View, Text, StyleSheet } from "react-native";
import AcademicSummary from "../component/AcademicSummary";
import SubjectItem from "../component/SubjectItem";

export default function StudentGrades() {
  const approved = [
    { initials: "MW", subject: "Modelos y Sistemas", grade: 9 },
    { initials: "MW", subject: "Organización y Métodos", grade: 9 },
    { initials: "MW", subject: "Matemática", grade: 8 },
  ];

  const failed = [
    { initials: "MW", subject: "Física", grade: 4 },
    { initials: "MW", subject: "Inglés", grade: 3 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.summarySection}>
        <AcademicSummary
          color="#030A8C"
          nota="8.5"
          texto="Promedio Anual"
        />
        <AcademicSummary
          color="#D9411E"
          nota="8.5"
          texto="Promedio 1er Cuatrimestre"
        />
        <AcademicSummary
          color="#FF9F47"
          nota="8.5"
          texto="Promedio 2do Cuatrimestre"
        />
      </View>

      <Text style={styles.sectionTitle}>Materias Aprobadas</Text>
      {approved.map((m, i) => (
        <SubjectItem
          key={i}
          initials={m.initials}
          subject={m.subject}
          grade={m.grade}
        />
      ))}

      <Text style={styles.sectionTitle}>Materias Desaprobadas</Text>
      {failed.map((m, i) => (
        <SubjectItem
          key={i}
          initials={m.initials}
          subject={m.subject}
          grade={m.grade}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
    paddingBottom: 52,
  },
  summarySection: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 8,
    marginBottom: 4,
    color: "#333",
  },
});
