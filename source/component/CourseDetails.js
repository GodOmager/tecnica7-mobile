import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function ResumeCourse({texto, icono}){
    return (
        <View style = {styles.container}>
            <FontAwesome5 name= {icono} size={22} color="#000" solid />
            <Text style={{ textAlign: "center", fontSize: 12 }}>{texto}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 98,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingVertical: 18,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        elevation: 4,
    },
});
