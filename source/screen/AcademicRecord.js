import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // si lo usás
import Header from "../component/Header";
import Selector1 from "../component/Selector1";
import Selector2 from "../component/Selector2";
import Title from "../component/Title";
import CollapsibleItem from "../component/CollapsibleItem";

import AcademicSummary from "../component/AcademicSummary";

export default function AcademicRecord() {
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
                <View>
                    <View style={{marginBottom:16}}><Selector1></Selector1></View>
                    <Selector2 item={"Primer Cuatrimestre"} iconName={"angle-down"}></Selector2>
                </View>
                <View>
                    <Title title= "Estudiantes" iconName="angle-right"></Title>
                    <View>
                        {[...Array(10)].map((_, i) => (
                            <CollapsibleItem key={i} />
                        ))}
                    </View>
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
