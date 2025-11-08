import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { useState } from 'react';
import Modal from 'react-native-modal';

import { FontAwesome5 } from '@expo/vector-icons';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function SelectorCollapsible({ item }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Opción 1');
    const options = ['Opción 1', 'Opción 2', 'Opción 3'];

    const toggleOpen = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setIsOpen(!isOpen);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.containerSelector} onPress={toggleOpen} activeOpacity={0.8}>
                <Text>{setSelectedOption}</Text>
                <FontAwesome5 name={isOpen ? "angle-up" : "angle-down"} size={16} color="#030A8C" solid />
            </TouchableOpacity>
            
            {isOpen && (
                <Modal
                    isVisible={isOpen} 
                    animationIn="slideInUp"
                    animationOut="slideOutDown" 
                    backdropTransitionOutTiming={0}
                    onBackdropPress={() => setIsOpen(false)}
                    style={{ justifyContent: 'flex-end', margin: 0 }}
                >
                    <View style={styles.modal}>

                        {options.map((opt) => (
                            <TouchableOpacity
                                key={opt}
                                style={styles.option}
                                onPress={() => {
                                    setSelectedOption(opt); // guardamos la selección
                                    setIsOpen(false);       // cerramos el modal
                                }}
                            >
                                <View style={styles.radioCircle}>
                                    {selectedOption === opt && <View style={styles.selectedRb} />}
                                </View>
                                <Text style={styles.optionText}>{opt}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </Modal>
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 38,
        backgroundColor: '#fff',
        borderRadius: 6,
        paddingVertical: 8,
        paddingHorizontal: 24,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        elevation: 4,
    },
    containerSelector: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: '100%',
    },

    modal: {
        backgroundColor: '#fff',
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    option: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    }

});
