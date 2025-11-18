import {React,useState} from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

export default function DataInput({ value, label, type, salient, isEditable, options = [], gender }) {
    const [body, setBody] = useState(value);
    switch(type){
        case "text":
            return(
                <View>
                    {/* LABEL */}
                    <Text style={styles.label}>{label}</Text>
                    
                    <View style={styles.containerInput}>

                        {/* INPUT DESTACADO */}
                        {salient && (
                            <View style={styles.salient}></View>
                        )}

                        {/* INPUT */}
                        <TextInput
                            placeholder= "Escriba aqui"
                            editable={isEditable}
                            value={isEditable? body : value}
                            onChangeText={setBody}
                            style={[styles.input, {backgroundColor: isEditable? '#fff' : '#f3f3f3ff'}, !salient && {borderRadius: 6}]}
                            textAlignVertical="top"
                        />
                    </View>
                </View>
            );
        case "radio":
            return(
                <View>
                    {/* LABEL */}
                    <Text style={styles.label}>{label}</Text>
                    
                    {/* OPCIONES */}
                    <View style={{ flexDirection: "row", gap: 32}}>
                        {options.map((opt, index) => (
                            <View key={opt} style={styles.option}>
                                <View style={styles.radio}>
                                    {index === gender && <View style={styles.innerCircle} />}
                                </View>
                                <Text style={[styles.label, {marginBottom: 0}]}>{opt}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            );
        
        case "number" : 
            return(
                <View>
                        {/* LABEL */}
                        <Text style={styles.label}>{label}</Text>
                        
                        <View style={styles.containerInput}>

                            {/* INPUT */}
                            <TextInput
                                placeholder= "Escriba aqui"
                                editable={isEditable}
                                value={isEditable? body : value}
                                onChangeText={setBody}
                                style={[styles.input, {backgroundColor: isEditable? '#fff' : '#f3f3f3ff'}, !salient && {borderRadius: 6}]}
                                textAlignVertical="top"
                                keyboardType="numeric"

                            />
                        </View>
                    </View>
            );
        case "password" : 
        return(
            <View>
                    {/* LABEL */}
                    <Text style={styles.label}>{label}</Text>
                    
                    <View style={styles.containerInput}>

                        {/* INPUT */}
                        <TextInput
                            placeholder= "Escriba aqui"
                            editable={isEditable}
                            value={isEditable? body : value}
                            onChangeText={setBody}
                            style={[styles.input, {backgroundColor: isEditable? '#fff' : '#f3f3f3ff'}, !salient && {borderRadius: 6}]}
                            textAlignVertical="top"
                            secureTextEntry
                        />
                    </View>
                </View>
        );
    }  

}

const styles = StyleSheet.create({
    label:{ 
        marginBottom: 14,
        fontWeight: 600,
        color: "#363636ff"
    },

    containerInput:{
        display: "flex",
        flexDirection: "row",
        
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        elevation: 4,
    },
    
    salient:{
        minHeight: 36,
        width: 48,
        backgroundColor: "#2659BF",
        borderTopLeftRadius: 6,
        borderBottomLeftRadius: 6,
    },
    
    input: {
        display: "flex",
        flex: 1,
        minHeight: 38,
        padding: 12,
        borderTopRightRadius: 6,
        borderBottomRightRadius: 6, 
        
        borderWidth: 0.5,
        borderColor: "#8b8b8bff",
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
        
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        elevation: 2
    },

    innerCircle: {
        width: 12,
        height: 12,
        borderRadius: 100,
        borderWidth: 3.5,
        borderColor: '#2659BF',
    },

    option:{
        minHeight: 40,
        display: "flex",
        flexDirection: "row",
        gap: 12,
        justifyContent: "center",
        alignItems: "center"
    },
});
