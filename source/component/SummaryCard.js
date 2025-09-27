import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function SummaryCard({ icon, title, value, note, color = "#f5f5f5" }) {
  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      {icon && <FontAwesome5 name={icon} size={18} color="#000" style={{ marginBottom: 6 }} />}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
      {note && <Text style={styles.note}>{note}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderRadius: 12,
    padding: 14,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 6,
  },
  value: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 4,
  },
  note: {
    fontSize: 12,
    color: "#555",
  },
});
