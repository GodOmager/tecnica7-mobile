import { StyleSheet, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import Header from "../component/Header";
import Tabs from "../nav/Tabs";
import StudentRecords from "../component/StudentRecords";
import StudentAttendance from "../component/StudentAttendance";

import AcademicSummary from "../component/AcademicSummary";

export default function AcademicRecord({navigation}) {
    const [activeTab, setActiveTab] = useState("Cuatrimestral");

    const renderContent = () => {
        switch (activeTab) {
          case "Cuatrimestral":
            return <StudentRecords navigation ={navigation}/>;
          case "Asignatura":
            return <StudentAttendance />;
          default:
            return null;
        }
      };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.contentContainer} style={styles.screen}>
                <View style={{ margin: -24, marginBottom: -10 }}>
                    <Header title="Registro Académico"></Header>
                </View>
                <View style= {styles.seccionResumen}>
                    <AcademicSummary color="#030A8C" nota="8.5" texto="Promedio del Curso"></AcademicSummary>
                    <AcademicSummary color="#D9411E" nota="8.5" texto="Promedio 1er Cuatrimestre"></AcademicSummary>
                    <AcademicSummary color="#FF9F47" nota="8.5" texto="Promedio 2do Cuatrimestre"></AcademicSummary>
                </View>
                <View style={{ display:"flex", gap: 14}}>
                    <Tabs onTabChange={setActiveTab} TABS = {["Cuatrimestral", "Asignatura"]} />
                    {renderContent()}
                    
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
