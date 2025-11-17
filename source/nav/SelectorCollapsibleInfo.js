import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import Modal from 'react-native-modal';

import DataInput from '../inputs/DataInput';

export default function SelectorCollapsible({ title }) {
    //Crea un estado isOpen cuyo valor/esrtado cambia por setIsOpen
    const [isOpen, setIsOpen] = useState(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.containerSelector} onPress={() => {setIsOpen(!isOpen)}} activeOpacity={0.8}>
                <View style= {{display: "flex", flexDirection: "row", gap: 18, alignItems: "center"}}>
                    <FontAwesome5 name= "user" size={24} color="#030A8C" />
                    <Text style= {{fontSize: 16}}>Información Personal</Text>
                </View>
                <FontAwesome5 name={isOpen ? "chevron-up" : "chevron-right"} size={16} color="#030A8C" />
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

                        <View style={{ display:"flex", gap:28 }}>

                        {/* NOMBRE Y APELLIDO */}
                        <DataInput 
                            type = "text" 
                            salient = {true} 
                            isEditable = {false}
                            value ="Administrador Genial" 
                            label="Nombre y Apellido"
                        />

                        {/* SEXO + EDAD */}
                        <View style={{ display: "flex", flexDirection: "row", gap: 74 }}>
                            {/* SEXO */}
                            <DataInput 
                                type = "radio"
                                label="Nombre y Apellido"
                                options={["Mujer", "Hombre"]}
                                gender = {1}
                            />

                            {/* EDAD */}
                            <DataInput 
                                type = "number"
                                label="Edad"
                                isEditable = {false}
                                value ="18"
                            />
                        </View>

                        {/* NACIMIENTO */}
                        <DataInput 
                            type = "text" 
                            salient = {true} 
                            isEditable = {false}
                            value ="Julio 31, 2000" 
                            label="Nacimiento"
                        />

                        {/* DOMICILIO */}
                        <DataInput 
                            type = "text" 
                            salient = {true} 
                            isEditable = {true}
                            value ="Lugar Creible 2884" 
                            label="Domicilio"
                        />

                        {/* LOCALIDAD */}
                        <DataInput 
                            type = "text" 
                            salient = {false} 
                            isEditable = {true}
                            value ="Quilmes" 
                            label="Localidad"
                        />

                        {/* DEPARTAMENTO */}
                        <DataInput 
                            type = "text" 
                            salient = {false} 
                            isEditable = {true}
                            value = "Quilmes" 
                            label="Departamento"
                        />
                        </View>


                    </View>
                </Modal>
            )}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 12,
        backgroundColor: '#fff',

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
    
    title:{
        fontSize: 24,
        fontWeight: 600,
        marginBottom: 24,
        marginTop: -14,
    },

    
});