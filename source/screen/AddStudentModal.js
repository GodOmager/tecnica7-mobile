import React, { useState } from "react";
import {
    View,
    Text,
    Modal,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Alert
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import DataInput from "../inputs/DataInput";

export default function AddStudentModal({ visible, onClose, onAdd }) {
    const [student, setStudent] = useState({
        nombre: "",
        apellido: "",
        dni: "",
        legajo: "",
        email: "",
        sexo: "",
        edad: "",
        celular: "",
        nacimiento: "",
        domicilio: "",
        nacionalidad: "",
        localidad: "",
    });

    const updateField = (field, value) => {
        setStudent((prev) => ({ ...prev, [field]: value }));
    };

    const getInitials = () => {
        const n = student.nombre?.trim()[0] || "";
        const a = student.apellido?.trim()[0] || "";
        return (n + a).toUpperCase();
    };

    const handleSave = () => {
        if (!student.nombre || !student.apellido || !student.dni) {
            Alert.alert("Datos incompletos", "Debe completar al menos nombre, apellido y DNI.");
            return;
        }

        const newStudent = {
            ...student,
            id: Date.now().toString(),
            iniciales: getInitials(),
        };

        // Pregunta si queres agregar un alumno
        Alert.alert(
            "Confirmar",
            `¿Desea agregar a ${student.nombre + " " + student.apellido}?`,
            [
                {
                    text: "Cancelar",
                    style: "cancel",
                },
                {
                    text: "Aceptar",
                    onPress: () => {
                        onAdd(newStudent);
                        onClose();
                        // Se vacian los campos
                        setStudent({
                            nombre: "",
                            apellido: "",
                            dni: "",
                            legajo: "",
                            email: "",
                            sexo: "",
                            edad: "",
                            celular: "",
                            nacimiento: "",
                            domicilio: "",
                            nacionalidad: "",
                            localidad: "",
                        });

                        // Si es asi lo confirma :D
                        Alert.alert(
                            "Alumno agregado",
                            `${student.nombre + " " + student.apellido} fue añadido correctamente.`
                        );
                    },
                },
            ]
        );
    };


    return (
        <Modal visible={visible} animationType="slide" presentationStyle="fullScreen">
            <View style={styles.header}>
                <TouchableOpacity onPress={onClose}>
                    <FontAwesome5 name="arrow-left" size={20} color="#030A8C" />
                </TouchableOpacity>

                <Text style={styles.title}>Añadir Alumno</Text>

                <TouchableOpacity onPress={handleSave}>
                    <FontAwesome5 name="check" size={20} color="#030A8C" />
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <Text style={{ fontSize: 24, fontWeight: 600, paddingBottom: 24 }}>Complete el Formulario</Text>
                <View style={styles.container}>
                    {/* NOMBRE */}
                    <DataInput
                        type="text"
                        isEditable={true}
                        salient={true}
                        value={student.nombre}
                        label="Nombre"
                        onChange={(t) => updateField("nombre", t)}
                    />


                    {/* APELLIDO */}
                    <DataInput
                        type="text"
                        isEditable={true}
                        salient={true}
                        value={student.apellido}
                        label="Apellido"
                        onChange={(t) => updateField("apellido", t)}
                    />

                    {/* DNI + LEGAJO */}
                    <View style={{ flexDirection: "row", gap: 24 }}>
                        <View style={{ flex: 1 }}>
                            <DataInput
                                type="number"
                                label="DNI"
                                isEditable={true}
                                value={student.dni}
                                onChange={(t) => updateField("dni", t)}
                            />
                        </View>

                        <View style={{ flex: 1 }}>
                            <DataInput
                                type="number"
                                label="Legajo"
                                isEditable={true}
                                value={student.legajo}
                                onChange={(t) => updateField("legajo", t)}
                            />
                        </View>
                    </View>

                    {/* EMAIL */}
                    <DataInput
                        type="text"
                        label="Correo Electrónico"
                        salient={true}
                        isEditable={true}
                        value={student.email}
                        onChange={(t) => updateField("email", t)}
                    />

                    {/* SEXO + EDAD */}
                    <View style={{ flexDirection: "row", gap: 24 }}>
                        <DataInput
                            type="radio"
                            label="Sexo"
                            options={["Mujer", "Hombre"]}
                            gender={student.sexo}
                            onChange={(v) => updateField("sexo", v)}
                        />

                        <View style={{ flex: 1 }}>
                            <DataInput
                                type="number"
                                label="Edad"
                                isEditable={true}
                                value={student.edad}
                                onChange={(t) => updateField("edad", t)}
                            />
                        </View>
                    </View>

                    {/* RESTO DE CAMPOS */}
                    <DataInput
                        type="number"
                        label="Celular"
                        salient={true}
                        isEditable={true}
                        value={student.celular}
                        onChange={(t) => updateField("celular", t)}
                    />

                    <DataInput
                        type="text"
                        label="Nacimiento"
                        salient={true}
                        isEditable={true}
                        value={student.nacimiento}
                        onChange={(t) => updateField("nacimiento", t)}
                    />

                    <DataInput
                        type="text"
                        label="Domicilio"
                        salient={true}
                        isEditable={true}
                        value={student.domicilio}
                        onChange={(t) => updateField("domicilio", t)}
                    />

                    <DataInput
                        type="text"
                        label="Nacionalidad"
                        isEditable={true}
                        value={student.nacionalidad}
                        onChange={(t) => updateField("nacionalidad", t)}
                    />

                    <DataInput
                        type="text"
                        label="Localidad"
                        isEditable={true}
                        value={student.localidad}
                        onChange={(t) => updateField("localidad", t)}
                    />

                </View>
            </ScrollView>
        </Modal>
    );
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: "#f5f5f5",
    },
    header: {
        height: 64,
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#00000010",
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: { fontSize: 18, fontWeight: "600", color: "#030A8C" },
    content: {
        padding: 20,
    },
    container: {
        gap: 12,
    },
});
