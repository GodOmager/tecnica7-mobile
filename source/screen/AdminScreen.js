import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../component/Header";
import AdminOptionItem from "../component/AdminOptionItem";

export default function AdminScreen({ navigation }) {
  return (
    <View style={styles.wrapper}>
      
      {/* 🔵 HEADER */}
      <Header
        title="Mi cuenta"
        iconName="search"
        onIconPress={() => {}}
        showSearch={false}
      />

      {/* 📜 CONTENIDO SCROLEABLE */}
      <ScrollView contentContainerStyle={styles.container}>

        {/* 🟦 AVATAR */}
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarText}>A</Text>
        </View>

        {/* 🔤 NOMBRE + MAIL */}
        <Text style={styles.name}>Administrador Genial</Text>
        <Text style={styles.email}>administrador.genial@tecnica7.edu.ar</Text>

        {/* 🧩 OPCIONES */}
        <View style={styles.optionsBlock}>
          <AdminOptionItem
            icon="user"
            text="Información Personal"
            onPress={() => console.log("Info Personal")}
          />

          <AdminOptionItem
            icon="cog"
            text="Datos de la Cuenta"
            onPress={() => console.log("Datos Cuenta")}
          />

          <AdminOptionItem
            icon="bars"
            text="Menú Principal"
            onPress={() => navigation.navigate("OptionsScreen")}
          />

          {/* ❌ CERRAR SESIÓN */}
          <AdminOptionItem
            icon="sign-out-alt"
            text="Cerrar Sesión"
            onPress={() => console.log("Cerrar sesión")}
          />
        </View>

      </ScrollView> 

    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  container: {
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 120,
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
    width: "90%",
  },

  navContainer: {
    position: "absolute",
    bottom: 18,
    alignSelf: "center",
  },
});
