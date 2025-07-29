import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Attendances from "../component/Attendances";
import CourseSelector from "../component/CourseSelector";
import Student from "../component/Student";
import Resume from "../component/CourseDetails";
import Title from "../component/Title";
import Warning from "../component/Warning";

export default function HomeScreen() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.contentContainer} style={styles.screen}>
                <CourseSelector />
                <View style={[styles.seccionResumen, {marginTop: -10}]}>
                    <Resume texto = "36 Estudiantes" icono= "users"></Resume>
                    <Resume texto = "Vespertino" icono= "clock"></Resume>
                    <Resume texto = "15 Materias" icono= "bookmark"></Resume>
                </View>
                <Warning />
                <View>
                    <Title title="Resumen Asistencias"></Title>
                    <Attendances />
                </View>
                <View>
                    <Title title= "Estudiantes" iconName="angle-right"></Title>
                    <View>
                        {[...Array(10)].map((_, i) => (
                            <Student key={i} />
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#f5f5f5"
    },
    contentContainer: {
        padding: 24,
        paddingTop: 8,
        backgroundColor: '#f5f5f5',
        display: "flex",
        flexDirection: "column",
        gap: 38,
        paddingBottom: 72,
    },
    seccionResumen:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
});
