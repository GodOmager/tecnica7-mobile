import { StyleSheet, ScrollView, Text, View, TouchableOpacity } from "react-native";

import SubjectItem from "../component/SubjectItem";

export default function StudentsListScreen({navigation}) {
    return(
        <ScrollView contentContainerStyle={styles.contentContainer} style={styles.screen}>
            <View style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[...Array(10)].map((_, i) => (
                    <SubjectItem
                        initials="WM"
                        subject="Walter Martinez"
                        grade={false}
                        onPress={() => navigation.navigate("StudentScreen")}
                    />
                ))}
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