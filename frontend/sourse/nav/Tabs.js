import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function StudentTabs({ onTabChange, TABS}) {
  const [active, setActive] = useState(TABS[0]);

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
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
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
    color: "#000",
  },
  activeText: {
    color: "#fff",
    fontWeight: "600",
  },
});
