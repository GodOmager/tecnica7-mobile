import { View, Text, StyleSheet, TextInput } from "react-native";

import DataInput from "../inputs/DataInput";

export default function StudentPersonal() {
  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 38,
    gap: 12,
  },
});
