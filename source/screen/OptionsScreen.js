import { StyleSheet, Text, View } from "react-native";

export default function OptionsScreen () {

    return (
        <View style = { style.screen }>
            <Text>Bienvenido a la seccion de secciones que no entran en el Nav!</Text>
        </View>
    );
}

const style = StyleSheet.create({
    screen: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})
