import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";

import AdministratorButton from "../component/AdministratorButton";
import OptionItem from "../component/OptionItem";

export default function OptionsScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
  <View style={styles.inner}>

    <View style={styles.adminBlock}>
      <AdministratorButton onPress={() => navigation.navigate("AdminScreen")} />
    </View>

    <View style={styles.list}>
      <OptionItem text="Inicio" icon="home" />
      <OptionItem text="Alumnos" icon="users" />
      <OptionItem text="Asignatura" icon="book" />
      <OptionItem text="Asistencia" icon="clipboard-list" />
      <OptionItem text="Eventos" icon="calendar" />
      <OptionItem text="Horarios" icon="clock" />
      <OptionItem text="Mensajes" icon="envelope" />
      <OptionItem text="Registro Académico" icon="file-alt" />
      <OptionItem text="Resumen del Curso" icon="layer-group" />
    </View>

    </View>
  </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F3F3",
  },

  list: {
    paddingHorizontal:12,
    marginTop: 4,
    gap: 16,
  },
  inner: {
  paddingHorizontal: 20,
  paddingTop: 44,
},

adminBlock: {
  marginBottom: 10,
},
});
