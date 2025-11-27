import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function OptionItem({ text, icon, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.row}>
        <View style={styles.iconCircle}>
          <FontAwesome5 name={icon} size={14} color="white" />
        </View>

        <Text style={styles.label}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,   // antes 14 — MUCHO más compacto
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#030A8C",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
  },

  label: {
    fontSize: 16,
    color: "#000",
  },
});
