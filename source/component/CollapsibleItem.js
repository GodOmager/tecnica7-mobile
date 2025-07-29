import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function CollapsableItem() {
  return (
    <View style={styles.container}>
        
        <View style={styles.containerPerfil}>
            <View style={styles.perfil}>
                <Text style={{ color: '#fff', fontSize: 16, fontWeight: '600' }}>MW</Text>
            </View>
            <Text style={{ fontSize: 16 }}>Martinez Walter</Text>
        </View>

        <View style={styles.nota}>
            <Text style={{fontSize: 20, fontWeight: '600'}}>8</Text>
            <FontAwesome5 name="angle-down" size={16} color="#030A8C" solid />
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 8,
        paddingHorizontal: 24,
        borderRadius: 12,
        marginVertical: 8,
  
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        elevation: 4,
    },

    containerPerfil:{
        display:"flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 14,
    },

    perfil: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 42,
        height: 42,
        borderRadius: 100,
        backgroundColor: '#030A8C'
    },

    nota: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    }
});