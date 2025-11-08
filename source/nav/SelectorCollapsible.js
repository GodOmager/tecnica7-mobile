import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, Platform, UIManager } from 'react-native';
import { useState } from 'react';
import Modal from 'react-native-modal';

import { FontAwesome5 } from '@expo/vector-icons';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function SelectorCollapsible({ title, options = [] }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0] || null);

    const toggleOpen = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setIsOpen(!isOpen);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.containerSelector} onPress={toggleOpen} activeOpacity={0.8}>
                <Text>{selectedOption}</Text>
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
                        <View>
                            <Text style={styles.title}>{title}</Text>
                        </View>

                        {options.map((opt, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.option}
                                onPress={() => {
                                    setSelectedOption(opt);
                                    setIsOpen(false);
                                }}
                                activeOpacity={0.7}
                            >
                                <View style={styles.radio}>
                                    {selectedOption === opt && <View style={styles.innerCircle} />}
                                </View>
                                <Text style={styles.label}>{opt}</Text>
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

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        elevation: 4,
    },
    
    containerSelector: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    modal: {
        backgroundColor: '#fff',
        paddingVertical: 56,
        paddingHorizontal: 24,
        borderTopLeftRadius: 36,
        borderTopRightRadius: 36,
    },

    option: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        padding: 14,
        marginBottom: 8,
        borderRadius: 8,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        elevation: 4,
    },

    radio: {
        width: 16,
        height: 16,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: "transparent",
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        elevation: 2,
    },
    innerCircle: {
        width: 12,
        height: 12,
        borderRadius: 100,
        borderWidth: 3.5,
        borderColor: '#2659BF',
    },
    label: {
        fontSize: 16,
    },

    title:{
        fontSize: 24,
        fontWeight: 600,
        marginBottom: 24,
        marginTop: -14,
    }

});
