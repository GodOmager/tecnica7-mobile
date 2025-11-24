import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../component/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import AdminOptionItem from "../nav/AdminOptionItem";

import SelectorCollapsibleInfo from "../nav/SelectorCollapsibleInfo";
import SelectorCollapsibleAccount from "../nav/SelectorCollapsibleAccount";

export default function AdminScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={styles.wrapper}>
        
        <View style={{ margin: -24, marginBottom: -10 }}>
          <Header
            title="Mi cuenta"
            iconName="search"
            onIconPress={() => {}}
            showSearch={false}
          />
        </View>

        <ScrollView contentContainerStyle={styles.container}>

          {/* PERFIL */}
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarText}>A</Text>
          </View>

          {/* NOMBRE + MAIL */}
          <Text style={styles.name}>Administrador Genial</Text>
          <Text style={styles.email}>administrador.genial@tecnica7.edu.ar</Text>

          {/* OPCIONES */}
          <View style={styles.optionsBlock}>
            <SelectorCollapsibleInfo title = "Información Personal"/>

            <SelectorCollapsibleAccount title = "Datos de la Cuenta"/>

            <AdminOptionItem
              icon="bars"
              text="Volver al menú"
              onPress={() => navigation.navigate("OptionsScreen")}
            />

            {/* CERRAR SESIÓN */}
            <AdminOptionItem
              icon="sign-out-alt"
              text="Cerrar Sesión"
              onPress={() => navigation.replace("Login")}
            />
          </View>

        </ScrollView> 

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 24,
  },

  container: {
    alignItems: "center",
    paddingTop: 48,
  },

  avatarCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#030A8C",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },

  avatarText: {
    color: "white",
    fontSize: 48,
    fontWeight: "bold",
  },

  name: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 4,
  },

  email: {
    fontSize: 14,
    color: "gray",
    marginBottom: 25,
  },

  optionsBlock: {
    width: "100%",
    gap: 18
  },

  navContainer: {
    position: "absolute",
    bottom: 18,
    alignSelf: "center",
  },
});
