import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function SubjectItem({ initials, subject, grade, onPress }) {
  return (
    <TouchableOpacity style={styles.item} activeOpacity={grade ? 1 : 0.6} onPress = {onPress}>
      {grade? null : (
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{initials}</Text>
        </View>
      )}

      <Text style={styles.subject}>{subject}</Text>
      {grade ? 
        (<Text style={styles.grade}>{grade}</Text>) 
        : ( <FontAwesome5 name="chevron-right" size={18} color="#333" />)
      }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 12,
    backgroundColor: "#fff",

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  avatar: {
    width: 32,
    height: 32,
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
    fontSize: 16,
    color: "#333",
  },
  grade: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000000ff",
  },
});
