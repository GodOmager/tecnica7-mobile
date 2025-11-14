import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function AdminOptionItem({ icon, text, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.left}>
        <FontAwesome5 name={icon} size={20} color="#030A8C" />
        <Text style={styles.text}>{text}</Text>
      </View>

      <FontAwesome5 name="chevron-right" size={16} color="#333" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 14,

    shadowColor: "#000",
    shadowOpacity: 0.10,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  text: {
    fontSize: 15,
    fontWeight: "500",
  },
});
