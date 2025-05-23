import {StyleSheet, View, Text } from "react-native";

export default function SegundoComponente() {
    return (
        <View style={style.contenido}>
            <Text> Hola Mundo </Text>
        </View>
    );
}

    const style = StyleSheet.create({
        contenido: {
            flex: 1,
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
        },
    })