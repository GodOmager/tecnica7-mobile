import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function MessageInput({
  subject,
  setSubject,
  body,
  setBody,
  onAttach,
}) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >

      <View style={styles.container}>
        
        {/* ASUNTO */}
        <Text style={styles.label}>Asunto</Text>
        <TextInput
          placeholder="Asunto"
          value={subject}
          onChangeText={setSubject}
          style={styles.input}
        />

        {/* MENSAJE */}
        <Text style={[styles.label, { marginTop: 12 }]}>Cuerpo</Text>
        <TextInput
          placeholder="Escribí tu mensaje aquí. Podés usar emojis y pegar imágenes."
          value={body}
          onChangeText={setBody}
          style={styles.textarea}
          textAlignVertical="top"
        />

        {/* ADJUNTAR */}
        <View style={styles.toolbar}>
          <View style={{ flexDirection: "row", gap: 12 }}>
            <TouchableOpacity onPress={onAttach} style={styles.iconBtn}>
              <FontAwesome5 name="paperclip" size={18} color="#030A8C" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconBtn} onPress={() => {}}>
              <FontAwesome5 name="smile" size={18} color="#030A8C" />
            </TouchableOpacity>
          </View>

          <Text style={styles.hint}>Tu mensaje se enviará al destinatario seleccionado</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, flex: 1 },
  label: { color: "#666", marginBottom: 6 },
  input: {
    height: 44,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#e6e6e6",
  },
  textarea: {
    flex: 1,
    marginTop: 6,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: "#e6e6e6",
    minHeight: 220,
  },
  toolbar: {
    height: 56,
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconBtn: {
    height: 40,
    width: 40,
    borderRadius: 8,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e6e6e6",
  },
  hint: { color: "#999", fontSize: 12 },
});
