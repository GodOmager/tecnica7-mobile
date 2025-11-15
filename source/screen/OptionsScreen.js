import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AdministratorButton from "../component/AdministratorButton";
import OptionItem from "../component/OptionItem";

export default function OptionsScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.contentContainer} style={styles.screen}>
        <View style={styles.inner}>

          <View style={styles.adminBlock}>
            <AdministratorButton onPress={() => navigation.navigate("AdminScreen")} />
          </View>

          <View style={styles.list}>
            <OptionItem text="Inicio" icon="home" />
            <OptionItem text="Alumnos" icon="users" />
            <OptionItem text="Asistencia" icon="clipboard-list" />
            <OptionItem text="Mensajes" icon="envelope" />
            <OptionItem text="Registro Académico" icon="file-alt" />
            <OptionItem text="Resumen del Curso" icon="layer-group" />
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

  list: {
    marginTop: 4,
    gap: 16,
  },

adminBlock: {
  marginBottom: 10,
},
});
