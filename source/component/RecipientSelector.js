// component/RecipientSelector.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const SAMPLE_RECIPIENTS = [
  { id: "r1", name: "Preceptor Eduardo" },
  { id: "r2", name: "Profesor Guzmán" },
  { id: "r3", name: "Prof. Daniela" },
  { id: "r4", name: "Preceptora Laura" },
];

export default function RecipientSelector({ value, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        style={styles.selector}
        onPress={() => setOpen((s) => !s)}
        activeOpacity={0.8}
      >
        <Text style={styles.value}>{value ?? "Seleccionar destinatario"}</Text>
        <FontAwesome5
          name={open ? "chevron-up" : "chevron-down"}
          size={14}
          color="#666"
        />
      </TouchableOpacity>

      {open && (
        <View style={styles.dropdown}>
          <FlatList
            data={SAMPLE_RECIPIENTS}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.item}
                onPress={() => {
                  onChange?.(item.name);
                  setOpen(false);
                }}
              >
                <Text style={styles.itemText}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { width: "100%" },
  selector: {
    height: 44,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e6e6e6",
  },
  value: { color: "#222" },
  dropdown: {
    marginTop: 8,
    maxHeight: 180,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e6e6e6",
    paddingVertical: 6,
    elevation: 4,
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  itemText: {
    fontSize: 15,
  },
});
