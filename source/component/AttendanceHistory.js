import { View, Text, StyleSheet } from "react-native";

export default function AttendanceHistory({ history }) {
  return (
    <View style={styles.container}>
      {history.map((item, idx) => (
        <View key={idx} style={styles.item}>
          <Text>{item.date} - {item.status}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 12, gap: 8 },
  item: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 8,
  },
});
