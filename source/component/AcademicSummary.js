import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function ResumeCourse({texto, nota, color}){
    return (
        <View style = {styles.container}>
            <Text style={{ textAlign: "center", fontSize: 28, color: color, fontWeight:600 }}>{nota}</Text>
            <Text style={{ textAlign: "center", fontSize: 12 }}>{texto}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 108,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 14,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        elevation: 4,
    },
});
 