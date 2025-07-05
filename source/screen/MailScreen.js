import { StyleSheet, Text, View } from "react-native";
import Student from "../component/Student";

export default function MailScreen() {

    return (
        <View style={style.screen}>
            <Text>Bienvenido a la mensageria!</Text>
            <Student></Student>
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
