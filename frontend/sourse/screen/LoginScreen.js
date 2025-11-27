import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, ImageBackground, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        if (email === "admin@tecnica7.edu.ar" && password === "admin1234") {
            navigation.replace("App");
        } else {
            Alert.alert("Error", "Credenciales incorrectas");
        }
    };

    return (
        <KeyboardAwareScrollView
            contentContainerStyle={{ flex: 1 }}
            enableOnAndroid={true}
            extraScrollHeight={100}
        >
            <ImageBackground
                source={require("../../assets/fondo-login.jpeg")}
                style={{ flex: 1 }}
                resizeMode="cover"
            >
                <View style={styles.container}>

                    <SafeAreaView style={{ flex: 1 }}>
                        <View style={styles.header}>
                            <Text style={{ color: "#fff", fontSize: 36, fontWeight: 800, textAlign: "center" }}>EEST N°7 Jose Hernandez</Text>
                            <Text style={{ color: "#fff", fontSize: 16, textAlign: "center" }}>Una escuela que piensa en tu futuro</Text>
                        </View>
                    </SafeAreaView>

                    <View style={styles.containerLogin}>
                        <Text style={styles.title}>Inicio de sesión</Text>

                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Correo Electronico</Text>
                            <TextInput
                                placeholder="Correo escolar"
                                placeholderTextColor="#ccc"
                                style={styles.input}
                                value={email}
                                onChangeText={setEmail}
                                autoCapitalize="none"
                            />
                        </View>

                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Contraseña</Text>
                            <TextInput
                                placeholder="Contraseña"
                                placeholderTextColor="#ccc"
                                style={styles.input}
                                secureTextEntry
                                value={password}
                                onChangeText={setPassword}
                            />
                        </View>

                        <TouchableOpacity style={styles.button} onPress={handleLogin}>
                            <Text style={styles.buttonText}>Ingresar</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ImageBackground>

        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "rgba(0, 50, 150, 0.61)",
    },

    header: {
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        paddingHorizontal: 24,
    },

    containerLogin: {
        backgroundColor: "#fff",
        paddingVertical: 36,
        paddingHorizontal: 24,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },

    title: {
        fontSize: 24,
        fontWeight: 600,
        marginBottom: 24,
    },

    label: {
        marginBottom: 8,
        fontWeight: 600,
        color: "#363636ff"
    },

    inputBlock: {
        marginBottom: 20,
    },

    input: {
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingHorizontal: 14,
        paddingVertical: 10,
        fontSize: 16,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        elevation: 4,
    },

    button: {
        backgroundColor: "#2659BF",
        marginTop: 12,
        paddingVertical: 14,
        borderRadius: 12,
    },

    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
    },
});