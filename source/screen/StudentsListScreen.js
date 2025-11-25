import React, { useState } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";

import SubjectItem from "../component/SubjectItem";
import FloatingButton from "../component/FloatingButton";

export default function StudentsListScreen({navigation}) {
    const [composeVisible, setComposeVisible] = useState(false);
    return(
        <ScrollView contentContainerStyle={styles.contentContainer} style={styles.screen}>
            <View style={{ flex: 1 }}>
                <FloatingButton onPress={() => setComposeVisible(true)} name= "plus"/>
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
            </View>
            
        </ScrollView>
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