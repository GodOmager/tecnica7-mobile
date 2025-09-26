import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function AttendanceCard({ icon, text, color = "#030A8C", bg = "#f5f5f5" }) {
  return (
    <View style={[styles.card, { backgroundColor: bg }]}>
      <FontAwesome5 name={icon} size={20} color={color} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  text: { flex: 1, fontSize: 13, color: "#333" },
});
