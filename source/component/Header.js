import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Header({title, iconName}) { 
    return (
        <View style = {styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FontAwesome5 name={iconName} size={24} color="#030A8C" solid />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: '#fff',
        paddingVertical: 22,
        paddingHorizontal: 24,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        elevation: 4,

        borderBottomWidth: 1,
        borderBottomColor: "#00000010",
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
    },
});