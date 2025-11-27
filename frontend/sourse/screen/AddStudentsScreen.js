import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function AddStudentsScreen({ visible, onClose, onAdd }) {
  // Datos del alumno
  const [student, setStudent] = useState({
    nombreCompleto: "",
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

  // Handler generico para cada input
  const updateField = (field, value) => {
    setStudent((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    // Validación mínima
    if (student.nombreCompleto.trim() === "" || student.dni.trim() === "") return;

    // Crear alumno final
    const newStudent = {
      ...student,
      id: Date.now().toString(), // ID único
    };

    onAdd(newStudent); // mandar alumno al padre
    onClose(); // cerrar modal

    // Reiniciar
    setStudent({
      nombreCompleto: "",
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
  };

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="fullScreen">
      <SafeAreaView style={styles.safe}>
        {/* HEADER */}
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
          <View style={styles.container}>
                {/* NOMBRE Y APELLIDO */}
                <DataInput
                  type="text"
                  salient={true}
                  isEditable={true}
                  value="Alumno Promedio"
                  label="Nombre y Apellido"
                />
                {/* DNI + Legajo */}
                <View style={{ display: "flex", flexDirection: "row", gap: 24 }}>
                  {/* DNI */}
                  <View style={{ flex: 1 }}>
                    <DataInput
                      type="text"
                      salient={false}
                      isEditable={false}
                      value="12.324.563"
                      label="DNI"
                    />
                  </View>
          
                  {/* LEGAJO */}
                  <View style={{ flex: 1 }}>
                    <DataInput
                      type="number"
                      label="Legajo"
                      isEditable={true}
                      value="11 5733 - 7944"
                    />
                  </View>
                </View>
          
                {/* CORREO */}
                <DataInput
                  type="text"
                  salient={true}
                  isEditable={true}
                  value="martinez.walter@tecnica7.edu.ar"
                  label="Correo Electronico"
                />
          
                {/* SEXO + EDAD */}
                <View style={{ display: "flex", flexDirection: "row", gap: 72 }}>
                  {/* SEXO */}
                  <DataInput
                    type="radio"
                    label="Sexo"
                    options={["Mujer", "Hombre"]}
                    gender={1}
                  />
          
                  {/* EDAD */}
                  <View style={{ flex: 1 }}>
                    <DataInput
                      type="number"
                      label="Edad"
                      isEditable={false}
                      value="18"
                    />
                  </View>
                </View>
          
                {/* CELULAR */}
                <View style={{ flex: 1 }}>
                  <DataInput
                    type="number"
                    salient={true}
                    label="Celular"
                    isEditable={true}
                    value="11 5733 - 7944"
                  />
                </View>
          
                {/* NACIMIENTO */}
                <DataInput
                  type="text"
                  salient={true}
                  isEditable={false}
                  value="Julio 31, 2000"
                  label="Nacimiento"
                />
          
                {/* DOMICILIO */}
                <DataInput
                  type="text"
                  salient={true}
                  isEditable={true}
                  value="Lugar Creible 2884"
                  label="Domicilio"
                />
          
                {/* NACIONALIDAD */}
                <DataInput
                  type="text"
                  salient={false}
                  isEditable={true}
                  value="Mexicano"
                  label="Nacionalidad"
                />
          
                {/* LOCALIDAD */}
                <DataInput
                  type="text"
                  salient={false}
                  isEditable={true}
                  value="Quilmes"
                  label="Localidad"
                />
          
              </View>

        </ScrollView>
      </SafeAreaView>
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
    paddingBottom: 80,
  },
});
