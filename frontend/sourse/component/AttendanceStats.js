import { View, Text, StyleSheet } from "react-native";

export default function AttendanceStats({ stats, horizontal = false, style, styleText }) {
  return (
    <View
      style={[
        styles.container,
        horizontal && styles.rowContainer, // si pasa horizontal=true
        style, // estilos extra desde afuera
      ]}
    >
      <View style={[styles.item, { backgroundColor: "#C6F095" }]}>
        <Text style={[styles.text, styleText, {color:"#77BD25"}]}>{stats.present} Presentes</Text>
      </View>
      <View style={[styles.item, { backgroundColor: "#FFDCBD" }]}>
        <Text style={[styles.text, styleText, {color:"#FF9F47"}]}>{stats.late} Tardanzas</Text>
      </View>
      <View style={[styles.item, { backgroundColor: "#FFD7D7" }]}>
        <Text style={[styles.text, styleText, {color:"#FF5454"}]}>{stats.absent} Ausencias</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 8,
  },
  rowContainer: {
    flexDirection: "row",
    gap: 12,
  },
  item: {
    
    paddingVertical: 8,
    borderRadius: 8,
    flexShrink: 1,
  },
  text: {
    marginHorizontal: 20,
    fontSize: 12,
    fontWeight: "500",
  },
});
