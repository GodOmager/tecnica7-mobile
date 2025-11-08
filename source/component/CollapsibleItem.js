import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

// Para animaciones suaves en Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function CollapsibleItem({initial, name, note}) {
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
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>{initial}</Text>
          </View>
          
          <Text style={{ fontSize: 16 }}>{name}</Text>
        </View>

        <View style={styles.nota}>
          <Text style={{ fontSize: 20, fontWeight: '600' }}>{note}</Text>
          <FontAwesome5 name={isOpen ? "angle-up" : "angle-down"} size={16} color="#030A8C" solid />
        </View>
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.subMenu}>

          <View style={styles.containerSubText}>
            <Text style={styles.subText}>Materias Aprobadas</Text>
            <Text style={styles.subText}>{note}</Text>
          </View>

          <View style={styles.containerSubText}>
            <Text style={styles.subText}>Materias Desaprobadas</Text>
            <Text style={styles.subText}>{note}</Text>
          </View>

          <View style={styles.containerSubText}>
            <Text style={styles.subText}>Asistencia</Text>
            <Text style={styles.subText}>{note}</Text>
          </View>
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
    marginTop: -10,
    paddingTop: 20,
    paddingBottom: 12,
    paddingHorizontal: 24,
    borderBottomEndRadius: 12,
    borderBottomStartRadius: 12,
    elevation: 2,
  },

  containerSubText:{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },

  subText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 4,
  },
});