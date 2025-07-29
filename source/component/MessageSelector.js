import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function MessageSelector() { 
    return (
        <View style = {styles.container}>
            <View style = {[styles.item, styles.itemSeleccion]}>
                <View style = {styles.item}>
                    <FontAwesome5 name="envelope-open" size={16} color="#030A8C" />
                    <Text style={{color: "#030A8C"}}>Recibidos</Text>
                </View>
                <View style = {styles.seleccion}></View>
            </View>
            <View style = {styles.item}>
                <FontAwesome5 name="paper-plane" size={16} color="#666" />
                <Text style={{color: "#666"}}>Recibidos</Text>
            </View>
            <View style = {styles.item}>
                <FontAwesome5 name="trash-alt" size={16} color="#666" />
                <Text style={{color: "#666"}}>Recibidos</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 52,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 24,

        borderBottomWidth: 1,
        borderBottomColor: "#00000010",
    },

    item:{
        height: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },

    itemSeleccion:{
        display: "flex",
        flexDirection: "column",
    },

    seleccion:{
        height: 4,
        width: "100%",
        backgroundColor: "#030A8C",
        borderTopEndRadius: 100,
        borderTopStartRadius: 100,
        marginTop: -2,
    },
});