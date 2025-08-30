// component/StudentPersonal.js
import { View, Text, StyleSheet, TextInput } from "react-native";

const InfoField = ({ label, value }) => (
  <View style={styles.field}>
    <Text style={styles.label}>{label}</Text>
    <TextInput style={styles.input} value={value} editable={false} />
  </View>
);

export default function StudentPersonal() {
  return (
    <View style={styles.container}>
      <InfoField label="Nombre y Apellido" value="Martinez Pereira Walter Samuel" />
      <View style={styles.row}>
        <InfoField label="DNI" value="12.324.563" />
        <InfoField label="Legajo" value="265.875-3" />
      </View>
      <InfoField label="Correo Electrónico" value="martinez.walter@tecnica7edu.ar" />

      <View style={styles.row}>
        <InfoField label="Sexo" value="Masculino" />
        <InfoField label="Edad" value="18" />
      </View>

      <InfoField label="Celular" value="11 5733 - 7944" />
      <InfoField label="Nacimiento" value="Noviembre 26, 2006" />
      <InfoField label="Domicilio" value="Lugar Creible 2884" />
      <InfoField label="Nacionalidad" value="Brasil" />
      <InfoField label="Localidad" value="Buenos Aires" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    gap: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    paddingBottom: 56,
  },
  field: {
    flex: 1,
    gap: 4,
  },
  label: {
    fontSize: 13,
    color: "gray",
  },
  input: {
    backgroundColor: "#f5f5f5",
    padding: 8,
    borderRadius: 8,
    fontSize: 14,
    color: "#333",
  },
  row: {
    flexDirection: "row",
    gap: 12,
  },
});
