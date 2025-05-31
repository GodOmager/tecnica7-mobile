import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';


export default function CuorseSelector(){
    return (
        <View style = {styles.contenedor}>

            <View style = {styles.contenedorIzquierda}>
                <View style={styles.contenedorIcono}>
                    <FontAwesome5 name="laptop-code" size={24} color="#fff" solid />
                </View>
                <View>
                    <Text>Programacion</Text>
                    <Text>7mo 1ra</Text>
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
        width:364,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    contenedorIzquierda: {
        display: "flex",
        flexDirection: "row",
        gap: 12,
        paddingVertical: 12,
        paddingHorizontal: 24,
    },
  contenedorIcono: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height:48,
    width:48,
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
