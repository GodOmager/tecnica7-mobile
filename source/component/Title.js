import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Title({title, iconName}) { 
  return (
    <View style={styles.seccionTitle}>
        <Text style={styles.title}>{title}</Text>
        <FontAwesome5 name={iconName} size={24} color="#030A8C" solid />
    </View>
  );
};

const styles = StyleSheet.create({
    seccionTitle:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
        marginVertical: 10
    },
});