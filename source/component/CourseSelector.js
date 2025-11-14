import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function CourseSelector({ course, onPress }) {
    return (
        <TouchableOpacity style={styles.contenedor} onPress={onPress}>

            <View style={styles.contenedorIzquierda}>
                <View style={styles.contenedorIcono}>
                    <FontAwesome5 name={course.icon} size={16} color="#fff" solid />
                </View>

                <View>
                    <Text style={{ fontSize: 16, fontWeight: '600' }}>{course.nombre}</Text>
                    <Text style={{ fontSize: 12 }}>{course.division}</Text>
                </View>
            </View>

            <View style={styles.contenedorDerecha}>
                <FontAwesome5 name="angle-down" size={24} color="#030A8C" solid />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    contenedor: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        elevation: 4,
    },
    contenedorIzquierda: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
    contenedorIcono: {
        justifyContent: "center",
        alignItems: "center",
        height: 36,
        width: 36,
        borderRadius: 100,
        backgroundColor: '#030A8C',
    },
    contenedorDerecha: {
        justifyContent: "center",
        alignItems: "center",
        height: 32,
        width: 32,
        borderWidth: 0.5,
        borderColor: "#2659BF",
        borderRadius: 100,
    },
});
