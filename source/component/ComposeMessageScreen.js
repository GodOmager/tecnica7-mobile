// component/ComposeMessageScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import RecipientSelector from "./RecipientSelector";
import MessageInput from "./MessageInput";

export default function ComposeMessageScreen({
  visible,
  onClose,
  onSend,        // <-- 🔥 AHORA SE RECIBE ESTA FUNCIÓN
  defaultFrom,
}) {
  const [recipient, setRecipient] = useState("Preceptor Eduardo");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSend = () => {
    if (subject.trim() === "" || body.trim() === "") return;

    const message = {
      to: recipient,
      subject,
      body,
      date: new Date().toLocaleDateString("es-AR", {
        day: "2-digit",
        month: "short",
      }),
    };

    onSend(message); // 🔥 se manda al MailScreen

    // 🔥 limpiar inputs
    setSubject("");
    setBody("");

    onClose(); // cerrar modal
  };

  const handleAttach = () => {
    alert("Adjuntar archivo - implementar según necesidades");
  };

  return (
    <Modal visible={visible} animationType="slide" presentationStyle="fullScreen">
      <SafeAreaView style={styles.safe}>
        <View style={styles.header}>
          <TouchableOpacity onPress={onClose}>
            <FontAwesome5 name="arrow-left" size={20} color="#030A8C" />
          </TouchableOpacity>

          <Text style={styles.title}>Nuevo Mensaje</Text>

          <TouchableOpacity onPress={handleSend}>
            <FontAwesome5 name="paper-plane" size={20} color="#030A8C" />
          </TouchableOpacity>
        </View>

        <View style={styles.meta}>
          <View style={{ width: "48%" }}>
            <Text style={styles.metaLabel}>De</Text>
            <View style={styles.metaValue}>
              <Text>{defaultFrom}</Text>
            </View>
          </View>

          <View style={{ width: "48%" }}>
            <Text style={styles.metaLabel}>Para</Text>
            <RecipientSelector value={recipient} onChange={setRecipient} />
          </View>
        </View>

        <MessageInput
          subject={subject}
          setSubject={setSubject}
          body={body}
          setBody={setBody}
          onAttach={handleAttach}
        />
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#f5f5f5" },
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
  meta: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
    gap: 12,
  },
  metaLabel: { color: "#666", marginBottom: 6 },
  metaValue: {
    backgroundColor: "#fff",
    height: 44,
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#e6e6e6",
  },
});
