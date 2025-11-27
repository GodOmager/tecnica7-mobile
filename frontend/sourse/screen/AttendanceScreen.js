import { StyleSheet, ScrollView, Text, View } from "react-native";
import { useState } from "react";

import Tabs from "../nav/Tabs";
import AttendanceToday from "../component/AttendanceToday";
import AttendanceHistory from "../component/AttendanceHistory";

export default function AttendanceScreen(navigation) {
    const [activeTab, setActiveTab] = useState("Hoy");

    const renderContent = () => {
        switch (activeTab) {
            case "Hoy":
                return <AttendanceToday />;
            case "Histórico":
                return <AttendanceHistory />;
            default:
                return null;
        }
    };
    return (
        <ScrollView contentContainerStyle={styles.contentContainer} style={styles.screen}>
            <View style={{ display: "flex", gap: 14 }}>
                <Tabs onTabChange={setActiveTab} TABS={["Hoy", "Histórico"]} />
                {renderContent()}
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
        display: "flex",
        flexDirection: "column",
        gap: 38,
        paddingBottom: 72,
    },

    seccionResumen:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
});