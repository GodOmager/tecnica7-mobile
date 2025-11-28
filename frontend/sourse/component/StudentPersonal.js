import { View, StyleSheet } from "react-native";
import DataInput from "../inputs/DataInput";

export default function StudentPersonal({ data }) {
  return (
    <View style={{ marginTop: 38, gap: 12 }}>
      <DataInput type="text" salient={true} isEditable={true} value={`${data?.nombre || ""} ${data?.apellido || ""}`} label="Nombre y Apellido" />

      <View style={{ flexDirection: "row", gap: 24 }}>
        <View style={{ flex: 1 }}>
          <DataInput type="text" salient={false} isEditable={false} value={String(data?.dni || "")} label="DNI" />
        </View>

        <View style={{ flex: 1 }}>
          <DataInput type="number" label="Legajo" isEditable={true} value={String(data?.legajo || "")} />
        </View>
      </View>

      <DataInput type="text" salient={true} isEditable={true} value={data?.email || ""} label="Correo Electrónico" />

      <View style={{ flexDirection: "row", gap: 72 }}>
        <DataInput type="radio" label="Sexo" options={["Mujer", "Hombre"]} gender={data?.sexo || 0} />

        <View style={{ flex: 1 }}>
          <DataInput type="number" label="Edad" isEditable={false} value={String(data?.edad || "")} />
        </View>
      </View>

      <DataInput type="number" salient={true} label="Celular" isEditable={true} value={data?.celular || ""} />
      <DataInput type="text" salient={true} isEditable={false} value={new Date(data?.nacimiento).toLocaleDateString() || ""} label="Nacimiento" />
      <DataInput type="text" salient={true} isEditable={true} value={data?.domicilio || ""} label="Domicilio" />
      <DataInput type="text" salient={false} isEditable={true} value={data?.nacionalidad || ""} label="Nacionalidad" />
      <DataInput type="text" salient={false} isEditable={true} value={data?.localidad || ""} label="Localidad" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    marginTop: 38,
    gap: 12,
  },
});
