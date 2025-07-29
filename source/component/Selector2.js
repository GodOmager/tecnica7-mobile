import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Selector1({item, iconName}){
    return (
        <View style = {styles.container}>
            <Text>{item}</Text>
            <FontAwesome5 name={iconName} size={16} color="#030A8C" solid />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 38,
        display:"flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: '#fff',
        borderRadius: 6,
        paddingVertical: 8,
        paddingHorizontal: 24,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        elevation: 4,
    },
});
 