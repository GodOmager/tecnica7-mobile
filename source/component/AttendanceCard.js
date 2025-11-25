import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function AttendanceCard({ icon, text, color = "#030A8C", bg = "#f5f5f5", select }) {
  return (
    <View>
      {select ? (
        <View style={[styles.card, { backgroundColor: bg }]}>
          <FontAwesome5 name={icon} size={32} color={color} solid />
          <Text style={{ color: color, fontSize: 13, textAlign: "center" }}>{text}</Text>
        </View>
      ) : (
        <View>
          <View style={[styles.containerIcon, { backgroundColor: bg }]}>
            <FontAwesome5 name={icon} size={32} color={color} solid />
          </View>
          <View style={styles.containerText}>
            <Text style={{ color: "#000", fontSize: 13, textAlign: "center" }}>{text}</Text>
          </View>
        </View>)}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    borderRadius: 12,
    alignItems: "center",
    gap: 14,
  },

  containerIcon:{
    alignItems: "center",
    paddingVertical: 22,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },

  containerText:{
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
  }
});
