// component/StudentAttendance.js
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function StudentAttendance() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumen Anual</Text>

      <View style={styles.gauge}>
        <Text style={styles.gaugeText}>75% Asistencia</Text>
      </View>

      <View style={styles.cards}>
        <View style={styles.card}>
          <FontAwesome5 name="calendar-times" size={20} color="#030A8C" />
          <Text style={styles.cardText}>Presente hoy con llegada fuera de horario</Text>
        </View>
        <View style={styles.card}>
          <FontAwesome5 name="check-circle" size={20} color="#030A8C" />
          <Text style={styles.cardText}>
            Buena presencia en clases. Sin alertas.
          </Text>
        </View>
      </View>

      <Text style={styles.subtitle}>Historial</Text>
      <View style={styles.historyItem}>
        <Text>05/06/25 - Presente</Text>
      </View>
      <View style={styles.historyItem}>
        <Text>04/06/25 - Ausente</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    gap: 16,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  title: { fontSize: 16, fontWeight: "600" },
  subtitle: { fontSize: 15, fontWeight: "500", marginTop: 12 },
  gauge: {
    height: 100,
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  gaugeText: { fontSize: 18, fontWeight: "600", color: "#030A8C" },
  cards: { gap: 12 },
  card: {
    backgroundColor: "#f5f5f5",
    padding: 12,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  cardText: { flex: 1, fontSize: 13, color: "#333" },
  historyItem: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 8,
  },
});
