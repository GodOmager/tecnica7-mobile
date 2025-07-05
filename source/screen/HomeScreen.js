import { StyleSheet, Text, View } from "react-native";
import Attendances from "../component/Attendances";
import CourseSelector from "../component/CourseSelector";
import Student from "../component/Student";

export default function HomeScreen () {

    return (
        <View style={style.screen}>
            <CourseSelector/>
            <View>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Resumen Asistencias</Text>
                <Attendances/>
            </View>
            <View>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Estudiantes</Text>
                <View>
                    <Student/>
                    <Student/>
                    <Student/>
                    <Student/>
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
