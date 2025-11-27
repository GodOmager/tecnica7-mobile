import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from 'react';

export default function Header({ title, iconName, onIconPress, showSearch, onSearchChange }) {

    return (
        <View style={styles.container}>

            {/* SI showSearch ES TRUE → MOSTRAR INPUT */}
            {showSearch ? (
                <TextInput
                    autoFocus
                    placeholder="Buscar mensajes..."
                    placeholderTextColor="#666"
                    style={styles.input}
                    onChangeText={onSearchChange}
                />
            ) : (
                <Text style={styles.title}>{title}</Text>
            )}

            <TouchableOpacity onPress={onIconPress}>
                <FontAwesome5 name={iconName} size={24} color="#030A8C" solid />
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
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
    input: {
        flex: 1,
        height: 42,
        backgroundColor: "#f5f5f5",
        borderRadius: 12,
        paddingHorizontal: 14,
        fontSize: 16,
        borderWidth: 1,
        borderColor: "#00000015",
        marginRight: 12,
    },
});
 