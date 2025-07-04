import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen () {

    return (
        <View style={style.screen}>
            <Text>Bienvenido al inicio!</Text>
        </View>
    );
};

const style = StyleSheet.create({
    screen: {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
})
