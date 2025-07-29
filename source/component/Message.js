import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Message({leido}) { 
    return (
        <View style = {leido? styles.containerRead : styles.container}>
            <View style = {leido? styles.iconRead : styles.icon}>
                <FontAwesome5 name={leido? "envelope-open" : "envelope"} size={14} color={leido? "#666": "#64a718ff"} />
            </View>
            <View style = {styles.text}>
                <View style = {styles.content}>
                    <View style = {[styles.text, {justifyContent: "none", gap: 8}]}>
                        <Text style={{fontWeight: "600"}}>Nombre Genial</Text>
                        <View style = {styles.circle}></View>
                        <Text style={{fontWeight: "600", color: "#030A8C"}}>Docente</Text>
                    </View>
                    <Text style={{fontSize: 13}}>Trabajo Práctico</Text>
                    <Text style={{fontSize: 13, color: "#666"}}>Lorem ipsum dolor sit amet, adipiscing elit...</Text>
                </View>
                <View style = {styles.date}>
                    <Text style={{fontSize: 14}}>07 Jul</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: '#fff',
        paddingVertical: 8,
        gap: 14,     
    },

    containerRead: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: '#f5f5f5',
        paddingVertical: 8,
        gap: 14,     
    },

    icon: {
        height: 56,
        width: 28,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d2ffb4ff",
        borderTopRightRadius: 14,
        borderBottomRightRadius: 14,
    },

    iconRead: {
        height: 56,
        width: 28,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
    },

    circle: {
        height: 6,
        width: 6,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
        borderRadius: 100,
    },

    text:{
        width: 314,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
});