import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // si lo usás
import Header from "../component/Header";
import Graphic from "../component/Graphic";

export default function Analytics() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.contentContainer} style={styles.screen}>
                <View style={{ margin: -20 }}>
                    <Header title="Resumen del Curso"></Header>
                    <Graphic percentage={95} size={180} strokeWidth={28} presentes={127} tardanzas={5} faltas={4}></Graphic>
                    
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
    }
});
