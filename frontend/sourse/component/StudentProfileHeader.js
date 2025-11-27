import { View, Text, StyleSheet } from "react-native";

export default function StudentProfileHeader({ initials, name, course }) {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={{ color: '#fff', fontSize: 32, fontWeight: '600' }}>{initials}</Text>
      </View>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.course}>{course}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    padding: 16,
    borderRadius: 12,
    height: 84,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  avatar: {
    width: 84,
    height: 84,
    borderRadius: 12,
    marginTop: -16,
    marginBottom: -16,
    marginLeft: -16,
    backgroundColor: "#030A8C",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  course: {
    fontSize: 13,
    color: "gray",
  },
});
