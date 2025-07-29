import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


export default function CuorseSelector(){
    return (
        <View style = {styles.contenedor}>

            <View style = {styles.contenedorIzquierda}>
                <View style={styles.contenedorIcono}>
                    <FontAwesome5 name="laptop-code" size={16} color="#fff" solid />
                </View>
                <View>
                    <Text style={{ fontSize: 16, fontWeight: '600'}}>Programacion</Text>
                    <Text style={{ fontSize: 12 }}>7mo 1ra</Text>
                </View>
                
            </View>
            
            <View style = {styles.contenedorDerecha}>
                <FontAwesome5 name="angle-down" size={24} color="#030A8C" solid />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        width: 364,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 24,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        elevation: 4,
    },
    contenedorIzquierda: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
  contenedorIcono: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height:36,
    width:36,
    borderRadius: 100,
    backgroundColor: '#030A8C',
    
  },
  contenedorDerecha: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 32,
        width: 32,
        borderWidth: 0.5,
        borderStyle: "solid",
        borderColor: "#2659BF",
        borderRadius: 100,
  },
});
