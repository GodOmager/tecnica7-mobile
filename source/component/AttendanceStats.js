import { View, Text, StyleSheet } from "react-native";

export default function AttendanceStats({ stats }) {
  return (
    <View style={styles.container}>
      <View style={[styles.item, { backgroundColor: "#E6F4E6" }]}>
        <Text style={styles.text}>{stats.present} Presentes</Text>
      </View>
      <View style={[styles.item, { backgroundColor: "#FFF3D6" }]}>
        <Text style={styles.text}>{stats.late} Tardanzas</Text>
      </View>
      <View style={[styles.item, { backgroundColor: "#FDE4E4" }]}>
        <Text style={styles.text}>{stats.absent} Ausencias</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 8,
  },
  item: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  text: {
    fontSize: 13,
    fontWeight: "500",
  },
});
