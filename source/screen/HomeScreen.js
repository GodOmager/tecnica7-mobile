import { StyleSheet, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // si lo usás
import Attendances from "../component/Attendances";
import CourseSelector from "../component/CourseSelector";
import Student from "../component/Student";
import Warning from "../component/Warning";

export default function HomeScreen() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.contentContainer} style={styles.screen}>
                <CourseSelector />
                <Warning />
                <View>
                    <Text style={styles.title}>Resumen Asistencias</Text>
                    <Attendances />
                </View>
                <View>
                    <Text style={styles.title}>Estudiantes</Text>
                    <View>
                        {[...Array(10)].map((_, i) => (
                            <Student style={styles.student} key={i} />
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
        backgroundColor: "#fff"
    },
    contentContainer: {
        padding: 16
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 10
    },
    student: {
        marginVertical: 10
    }
});
