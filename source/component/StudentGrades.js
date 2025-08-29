// component/StudentGrades.js
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const GradeItem = ({ subject, grade }) => (
  <View style={styles.item}>
    <Text style={styles.subject}>{subject}</Text>
    <View style={styles.gradeBox}>
      <Text style={styles.grade}>{grade}</Text>
      <FontAwesome5 name="angle-down" size={14} color="#030A8C" />
    </View>
  </View>
);

export default function StudentGrades() {
  return (
    <View style={styles.container}>
      <GradeItem subject="Matemática" grade="8" />
      <GradeItem subject="Programación" grade="9" />
      <GradeItem subject="Física" grade="7" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    gap: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    alignItems: "center",
  },
  subject: { fontSize: 14 },
  gradeBox: { flexDirection: "row", alignItems: "center", gap: 6 },
  grade: { fontSize: 16, fontWeight: "600" },
});
