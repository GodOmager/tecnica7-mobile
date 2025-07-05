import { StyleSheet, Text, View } from "react-native";

export default function MailScreen() {

    return (
        <View style={style.screen}>
            <Text>Bienvenido a la mensageria!</Text>
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
