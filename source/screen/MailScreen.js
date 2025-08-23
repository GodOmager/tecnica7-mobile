import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // si lo usás
import Header from "../component/Header";
import MessageSelector from "../component/MessageSelector";
import Message from "../component/Message";

export default function MailScreen() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.contentContainer} style={styles.screen}>
                    <Header title="Mensajes" iconName="search"></Header>
                    <MessageSelector></MessageSelector>
                    <View>
                        {[...Array(10)].map((_, i) => (
                            <Message key={i} leido = {false} />
                        ))}
                    </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#f5f5f5"
    },
    contentContainer: {
        backgroundColor: '#f5f5f5',
        paddingBottom: 72,
    }
});
