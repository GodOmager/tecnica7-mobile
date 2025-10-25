import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export default function Student({ onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.perfil}>
        <Text style={{ color: '#fff', fontSize: 32, fontWeight: '600' }}>MW</Text>
      </View>

      <View style={styles.contenido}>
        <Text style={{ fontSize: 18, fontWeight: '600' }}>Martinez Walter</Text>
        <View style={styles.resumen}>
          <View style={styles.asistencias}>
            <View style={styles.bulletAsistencias}></View>
            <Text>73% de Asistencia</Text>
          </View>
          <View style={styles.tardanzas}>
            <View style={styles.bulletTardanzas}></View>
            <Text>2 Tardanzas</Text>
          </View>
          <View style={styles.faltas}>
            <View style={styles.bulletFaltas}></View>
            <Text>4 Faltas</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        display: "flex",
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 12,
        flexDirection: "row",
        gap: 22,
        width: 364,
        marginVertical: 8,
  
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        elevation: 4,
    },

    perfil: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 94,
        height: 94,
        borderRadius: 12,
        backgroundColor: '#030A8C'
    },

    contenido: {
        display: "flex",
        flexDirection: "column",
        gap: 8,
    },

    asistencias: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },

    tardanzas: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },

    faltas: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
    },

    bulletAsistencias: {
        width: 6,
        height: 6,
        borderRadius: 100,
        backgroundColor: '#77BD25',
    },

    bulletTardanzas: {
        width: 6,
        height: 6,
        borderRadius: 100,
        backgroundColor: '#FF9F47',
    },

    bulletFaltas: {
        width: 6,
        height: 6,
        borderRadius: 100,
        backgroundColor: '#FF5454',
    },
});