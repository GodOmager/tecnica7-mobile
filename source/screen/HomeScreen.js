import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Attendances from "../component/Attendances";
import CourseSelector from "../component/CourseSelector";
import Student from "../component/Student";
import Resume from "../component/CourseDetails";
import Title from "../component/Title";
import Warning from "../component/Warning";
import { useNavigation } from '@react-navigation/native';
import { useState, useRef } from "react";

const fakeCourses = [
    { id: 1, nombre: "Programación", division: "7mo 1ra", icon: "laptop-code" },
    { id: 2, nombre: "Programación", division: "7mo 2da", icon: "laptop-code" },
    { id: 3, nombre: "Informatica personal y profesional", division: "7tmo 1ra", icon: "microchip" },
    { id: 4, nombre: "Informatica personal y profesional", division: "7tmo 2da", icon: "microchip" },
    { id: 5, nombre: "Administracion de organizaciones", division: "7mo 1ra", icon: "chart-line" },
    { id: 6, nombre: "Programacion", division: "6to 1ra", icon: "laptop-code" },
];

export default function HomeScreen() {
    const navigation = useNavigation();

    const [selectedCourse, setSelectedCourse] = useState(fakeCourses[0]);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const dropdownAnim = useRef(new Animated.Value(0)).current;

    const toggleDropdown = () => {
        setDropdownVisible(prev => !prev);
        Animated.timing(dropdownAnim, {
            toValue: dropdownVisible ? 0 : 1,
            duration: 200,
            useNativeDriver: false
        }).start();
    };

    const dropdownHeight = dropdownAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 380] // podés agrandar si tenés más cursos
    });

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.contentContainer} style={styles.screen}>

                <CourseSelector
                    course={selectedCourse}
                    onPress={toggleDropdown}
                />
                <Animated.View style={[styles.dropdown, { height: dropdownHeight }]}>
                    {fakeCourses.map(curso => (
                        <TouchableOpacity
                            key={curso.id}
                            style={styles.dropdownItem}
                            onPress={() => {
                                setSelectedCourse(curso);
                                toggleDropdown();
                            }}
                        >
                            <FontAwesome5 name={curso.icon} size={16} color="#030A8C" solid />
                            <Text style={styles.dropdownText}>
                                {curso.nombre} — {curso.division}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </Animated.View>

                {/* INFO DEL CURSO */}
                <View style={[styles.seccionResumen, { marginTop: dropdownVisible ? -14 : -34 }]}>
                    <Resume texto="36 Estudiantes" icono="users" />
                    <Resume texto="Vespertino" icono="clock" />
                    <Resume texto="15 Materias" icono="bookmark" />
                </View>

                <View>
                    <Title title="Eventos" iconName="angle-right" />
                    <Warning />
                </View>

                <View>
                    <Title title="Resumen Asistencias" />
                    <Attendances />
                </View>

                <View>
                    <Title title="Estudiantes" iconName="angle-right" />
                    <View>
                        {[...Array(10)].map((_, i) => (
                            <Student
                                key={i}
                                onPress={() => navigation.navigate("StudentScreen")}
                            />
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
        gap: 38,
        paddingBottom: 72,
    },
    seccionResumen: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    dropdown: {
        overflow: "hidden",
        backgroundColor: "#fff",
        borderRadius: 12,
        marginTop: -20,
        marginBottom: 10,
        elevation: 4,
    },
    dropdownItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: "#00000010",
    },
    dropdownText: {
        fontSize: 15,
        fontWeight: "500",
    },
});
