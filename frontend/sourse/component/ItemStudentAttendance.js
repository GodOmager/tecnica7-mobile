import { StyleSheet, TouchableOpacity, Text, View, Dimensions } from "react-native";
import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

export default function StudentAttendanceToday({ 
    initials, 
    nombreCompleto, 
    editMode, 
    estado, 
    updateState, 
    id, 
    style, 
    history, 
    fecha,
    presentes,
    tardanzas,
    ausentes
}) {

    const fechaFormateada = (fechaString) => {
        const fecha = new Date(fechaString);
        return fecha.toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    return (
        <View style={[{ flexDirection: "row", justifyContent: "space-between" }, style]}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                {/* Perfil (no se ve en Asistencia -> Hoy) */}
                {!history && (
                    < View style={styles.circle}>
                        <Text style={styles.circleText}>{initials}</Text>
                    </View>)}

                {/* Nombre y apellido / Fecha */}
                {history? 
                    ( <Text style={styles.name}>{fechaFormateada(fecha)}</Text> ):
                    ( <Text style={styles.name}>{nombreCompleto}</Text> )
                }
            </View>

            {/* Botones de asistencia */}
            <View style={styles.actions}>
                {/* PRESENTE */}
                <TouchableOpacity
                    disabled={!editMode}
                    style={[
                        styles.btn,
                        estado === "presente" ? styles.greenBtn : styles.greenBorder,
                        !editMode && styles.disabled,
                        history && styles.greenBtn
                    ]}
                    onPress={() => updateState(id, "presente")}
                >
                    {history? (<Text style={{ color: "#fff" }} >{presentes}</Text>):
                        ( 
                            <FontAwesome5 name="check" size={12} color={estado === "presente" ? "#fff" : "#3d3d3dff"} />
                    )}
                </TouchableOpacity>

                {/* TARDANZA */}
                <TouchableOpacity
                    disabled={!editMode}
                    style={[
                        styles.btn,
                        estado === "tarde" ? styles.orangeBtn : styles.orangeBorder,
                        !editMode && styles.disabled,
                        history && styles.orangeBtn
                    ]}
                    onPress={() => updateState(id, "tarde")}
                >
                    {history? (<Text style={{ color: "#fff" }}>{tardanzas}</Text>):
                        ( 
                            <FontAwesome5 name="check" size={12} color={estado === "tarde" ? "#fff" : "#3d3d3dff"} />
                    )}
                    
                </TouchableOpacity>

                {/* AUSENCIA */}
                <TouchableOpacity
                    disabled={!editMode}
                    style={[
                        styles.btn,
                        estado === "ausente" ? styles.redBtn : styles.redBorder,
                        !editMode && styles.disabled,
                        history && styles.redBtn
                    ]}
                    onPress={() => updateState(id, "ausente")}
                >
                    {history? (<Text style={{ color: "#fff" }} >{ausentes}</Text>):
                        (
                            <FontAwesome5 name="check" size={12} color={estado === "ausente" ? "#fff" : "#3d3d3dff"} />
                    )}
                </TouchableOpacity>

                {history? (
                    <TouchableOpacity style={{ paddingLeft: 7 }}>
                        <FontAwesome5 name="chevron-right" size={14} color="#030A8C" ></FontAwesome5>
                    </TouchableOpacity>
                ) : null}

            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    perfil: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
    },

    circle: {
        width: 26,
        height: 26,
        borderRadius: 100,
        backgroundColor: "#030A8C",
        justifyContent: "center",
        alignItems: "center",
    },

    circleText: {
        color: "white",
        fontWeight: 600,
        fontSize: 12,
    },

    name: {
        fontSize: 16,
    },

    actions: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },

    btn: {
        width: 26,
        height: 26,
        borderRadius: 17,
        alignItems: "center",
        justifyContent: "center",
    },

    greenBtn: {
        backgroundColor: "#77BD25",
    },

    orangeBtn: {
        backgroundColor: "#FF9F47",
    },

    redBtn: {
        backgroundColor: "#FF5454",
    },

    greenBorder: {
        borderWidth: 0.5,
        borderColor: "#77BD25",
    },
    orangeBorder: {
        borderWidth: 0.5,
        borderColor: "#FF9F47",
    },
    redBorder: {
        borderWidth: 0.5,
        borderColor: "#FF5454",
    },

    disabled: {
        opacity: 0.6,
    },
})