import { View, Text, StyleSheet } from "react-native";

export default function SubjectItem({ initials, subject, grade }) {
  return (
    <View style={styles.item}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{initials}</Text>
      </View>

      <Text style={styles.subject}>{subject}</Text>

      <Text style={styles.grade}>{grade}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    marginBottom: 10,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#030A8C",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  avatarText: {
    color: "#fff",
    fontWeight: "600",
  },
  subject: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  grade: {
    fontSize: 16,
    fontWeight: "600",
    color: "#030A8C",
  },
});
