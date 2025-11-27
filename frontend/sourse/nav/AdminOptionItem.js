import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function AdminOptionItem({ icon, text, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style= {{display: "flex", flexDirection: "row", gap: 18, alignItems: "center"}}>
        <FontAwesome5 name={icon} size={24} color="#030A8C" />
        <Text style= {{fontSize: 16}}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,

    shadowColor: "#000",
    shadowOpacity: 0.10,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
  }
});
