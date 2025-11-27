import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function InfoCard({ icon, iconColor, title, subtitle, items = [] }) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        {icon && <FontAwesome5 name={icon} size={24} color={iconColor || "#000"} style={{ marginRight: 6 }} />}
        <Text style={styles.title}>{title}</Text>
      </View>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      {items.map((item, i) => (
        <Text key={i} style={styles.item}>• {item}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  header: {
    alignItems: "center",
    gap: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 12,
    color: "#555",
    marginBottom: 6,
  },
  item: {
    fontSize: 12,
    color: "#444",
  },
});
