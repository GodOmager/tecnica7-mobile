import React, { useState } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";

import SubjectItem from "../component/SubjectItem";
import FloatingButton from "../component/FloatingButton";
import ComposeMessageScreen from "../component/ComposeMessageScreen";

export default function StudentsListScreen({ navigation }) {
    const [composeVisible, setComposeVisible] = useState(false);
    const addSentMessage = (msg) => {
    setSentMessages((prev) => [...prev, msg]);
  };//


    return (
        <View style={{ flex: 1 }} >
            <ScrollView contentContainerStyle={styles.contentContainer} style={styles.screen}>
                <View style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {[...Array(20)].map((_, i) => (
                        <SubjectItem
                            initials="WM"
                            subject="Walter Martinez"
                            grade={false}
                            onPress={() => navigation.navigate("StudentScreen")}
                        />
                    ))}
                </View>
            </ScrollView>
            <FloatingButton onPress={() => setComposeVisible(true)} name="plus" />
            {/* MODAL */}
            <ComposeMessageScreen
                visible={composeVisible}
                onClose={() => setComposeVisible(false)}
                onSend={addSentMessage}
                defaultFrom="Preceptor Eduardo"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#f5f5f5"
    },
    contentContainer: {
        padding: 24,
        backgroundColor: '#f5f5f5',
        gap: 38,
        paddingBottom: 72,
    }

})