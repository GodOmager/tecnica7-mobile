import { StyleSheet, ScrollView, TouchableOpacity, Text, View, FlatList, Alert, Dimensions } from "react-native";
import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import Graphic from "./Graphic";
import AttendanceStats from "./AttendanceStats";
import initialData from "../json/students";
import ItemStudentAttendance from "./ItemStudentAttendance";

const screenWidth = Dimensions.get("window").width;

export default function AttendanceToday() {
    const attendanceData = { present: "", late: "", absent: "" };
    const [students, setStudents] = useState(initialData);
    const [editMode, setEditMode] = useState(false);
    {/* Copia de los datos de estudiantes temporal (cuando se edita y se cancela se vuelve a como estaba antes) */}
    const [tempStudents, setTempStudents] = useState(initialData);

    const getInitials = (nombre, apellido) => {
        const n = nombre?.trim()[0] || "";
        const a = apellido?.trim()[0] || "";
        return (n + a).toUpperCase();
    };

    const toggleEdit = () => {
        // Si no está en modo edicion
        if (!editMode) {
            // Antes de entrar a editar se copian los datos actuales
            setTempStudents(JSON.parse(JSON.stringify(students)));
            setEditMode(true);
        } else {
            // Al salir de editar
            Alert.alert(
                "Guardar cambios",
                "¿Quieres guardar los cambios?",
                [
                    {
                        text: "No",
                        style: "cancel",
                        onPress: () => {
                            // Volver a datos originales
                            setTempStudents(students);
                            setEditMode(false);
                        }
                    },
                    {
                        text: "Sí",
                        onPress: () => {
                            // Guardar cambios
                            setStudents(tempStudents); 
                            setEditMode(false);
                        }
                    }
                ]
            );
        }
    };

    const updateState = (id, estado) => {
        //Si no estamos en modo edicion no hace nada
        if (!editMode) return;

        // Copia el array tempStudents pero con los mismos objetos xq están "conectados" (si se cambia algo en la copia en el original tambien) 
        const copia = [...tempStudents];
        //findIndex recorre el array y devuelve id del primer elemento que sea igual al id q se quiere modificar
        const i = copia.findIndex(s => s.id === id);

        copia[i].estado = (copia[i].estado === estado) ? null : estado;

        setTempStudents(copia);
    };


    return (
        <ScrollView style={styles.screen}>

            <View style={{ marginTop: -8, marginBottom: 18 }}>
                <Graphic percentage={75} size={175} strokeWidth={38} />
            </View>

            <View style={styles.containerHeader}>

                {/* Boton de editar/implementar */}
                <TouchableOpacity style={styles.editIcon} onPress={toggleEdit} >
                    {editMode ? (<FontAwesome5 name="check" size={12} color="#030A8C" solid />) :
                        (<FontAwesome5 name="edit" size={12} color="#030A8C" solid />)}
                </TouchableOpacity>

                {/* Guia de colores */}
                <AttendanceStats stats={attendanceData} horizontal styleText={{ marginHorizontal: 12 }} />

            </View>

            <FlatList
                data={tempStudents}
                keyExtractor={(item) => item.id.toString()}
                ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
                renderItem={({ item }) => (
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                        <Text style={{ fontSize: 16, fontWeight: 600, width: 16 }}>{item.id}</Text>
                        <ItemStudentAttendance
                            initials = {getInitials(item.nombre, item.apellido)}
                            nombreCompleto={`${item.apellido} ${item.nombre}`}
                            editMode = {editMode}
                            estado={item.estado}
                            updateState={updateState}
                            id = {item.id}
                            style={{width: screenWidth - 72}}
                        />
                    </View>
                )}
            />

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingBottom: 72,
        backgroundColor: '#f5f5f5',
    },
    editIcon: {
        height: 32,
        width: 32,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#C9DBFF",
        borderRadius: 6,
    },
    containerHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 12,
        marginBottom: 24,
        borderBottomWidth: 1,
        borderColor: "#D9D9D9",
    },

});