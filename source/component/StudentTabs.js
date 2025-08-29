// component/StudentTabs.js
import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const TABS = ["Personal", "Asistencias", "Notas"];

export default function StudentTabs({ onTabChange }) {
  const [active, setActive] = useState("Personal");

  const handlePress = (tab) => {
    setActive(tab);
    onTabChange?.(tab);
  };

  return (
    <View style={styles.container}>
      {TABS.map((tab) => (
        <TouchableOpacity
          key={tab}
          onPress={() => handlePress(tab)}
          style={[styles.tab, active === tab && styles.activeTab]}
        >
          <Text
            style={[styles.tabText, active === tab && styles.activeText]}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#e5e5e5",
    borderRadius: 10,
    overflow: "hidden",
  },
  tab: {
    flex: 1,
    padding: 12,
    alignItems: "center",
  },
  activeTab: {
    backgroundColor: "#030A8C",
  },
  tabText: {
    fontSize: 14,
    color: "#333",
  },
  activeText: {
    color: "#fff",
    fontWeight: "600",
  },
});
