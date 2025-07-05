import { StyleSheet, Text, View } from "react-native";
import Attendances from "../component/Attendances";
import CourseSelector from "../component/CourseSelector";

export default function HomeScreen () {

    return (
        <View style={style.screen}>
            <CourseSelector/>
            <View>
                <Title value="Resumen Asistencias"/>
                <Attendances/>
            </View>
            <View>
                <Title value=""/>
                <View>
                    <Student/>
                </View> 
            </View>
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
