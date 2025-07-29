import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Selector1(){
    return (
        <View style = {styles.container}>
            <View style={styles.selectorSelect}>
                <Text style={{color: "#fff", fontWeight: 600, fontSize: 16}}>Cuatrimestral</Text>
            </View>
            <View style={[styles.selectorSelect, styles.selector]}>
                <Text style={{color: "#000", fontWeight: 600, fontSize: 16}}>Asignatura</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 7,
        display:"flex",
        flexDirection: "row",

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        elevation: 4,
    },
    
    selectorSelect:{
        width: "50%",
        height: 38,
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#030A8C',
        borderRadius: 7,
        color: "#fff",
    },

    selector:{
        backgroundColor: 'transparent',
    }
});
 