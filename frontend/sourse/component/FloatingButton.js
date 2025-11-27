import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function SendMessageIcon({ onPress, name }) {
  return (
    <View pointerEvents="box-none" style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={onPress}
        style={styles.fab}
      >
        <FontAwesome5 name={name} size={18} color="white" solid />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    right: 24,
    bottom: 94,
    zIndex: 50,
  },
  fab: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#030A8C",
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
  },
});
