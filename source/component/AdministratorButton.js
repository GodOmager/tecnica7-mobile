import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function AdministratorButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.left}>
        <View style={styles.iconCircle}>
          <Text style={styles.iconText}>A</Text>
        </View>

        <View>
          <Text style={styles.title}>Administrador</Text>
          <Text style={styles.subtitle}>Mi cuenta</Text>
        </View>
      </View>

      <FontAwesome5 name="chevron-right" size={18} color="#333" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,

    shadowOffset: { width: 0, height: 3 },
    shadowColor: '#000',
    elevation: 4,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#030A8C",
    justifyContent: "center",
    alignItems: "center",
  },

  iconText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },

  title: {
    fontSize: 15,
    fontWeight: "700",
  },

  subtitle: {
    fontSize: 13,
    color: "gray",
  },
});
