import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

// Para animaciones suaves en Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function CollapsableItem() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsOpen(!isOpen);
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.container} onPress={toggleOpen} activeOpacity={0.8}>
        <View style={styles.containerPerfil}>
          <View style={styles.perfil}>
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>MW</Text>
          </View>
          <Text style={{ fontSize: 16 }}>Martinez Walter</Text>
        </View>

        <View style={styles.nota}>
          <Text style={{ fontSize: 20, fontWeight: '600' }}>8</Text>
          <FontAwesome5 name={isOpen ? "angle-up" : "angle-down"} size={16} color="#030A8C" solid />
        </View>
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.subMenu}>
          <Text style={styles.subText}>Materias Aprobadas: 6</Text>
          <Text style={styles.subText}>Materias Desaprobadas: 4</Text>
          <Text style={styles.subText}>Asistencia: 80%</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 6,
  },
  container: {
    backgroundColor: '#fff',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  containerPerfil: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  perfil: {
    justifyContent: "center",
    alignItems: "center",
    width: 42,
    height: 42,
    borderRadius: 100,
    backgroundColor: '#030A8C',
  },
  nota: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  subMenu: {
    backgroundColor: "#fff",
    marginTop: 4,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    elevation: 2,
  },
  subText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 4,
  },
});
