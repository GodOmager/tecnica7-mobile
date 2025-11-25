import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Title({ title, iconName, onPress, activeOpacity }) {
  return (
    <TouchableOpacity style={styles.seccionTitle} activeOpacity={activeOpacity ? 0.6 : 1} onPress={onPress} >
      <Text style={styles.title}>{title}</Text>
      <FontAwesome5 name={iconName} size={24} color="#030A8C" solid />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  seccionTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingTop: 38,
    paddingBottom: 18
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
});