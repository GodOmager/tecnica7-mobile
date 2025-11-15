import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // si lo usás

import { useState } from "react";
import CollapsableItem from './CollapsibleItem';
import SelectorCollapsible from "../nav/SelectorCollapsible";
import Title from "./Title";

export default function StudentRecords() {
    const [activeTab, setActiveTab] = useState("Primer Cuatrimestre");

    const renderContent = () => {
        switch (activeTab) {
            case "Primer Cuatrimestre":
                return (<View>
                    {[...Array(10)].map((_, i) => (
                        <CollapsableItem initial="MW" perfil={true} name="Martinez Walter" note="8" key={i} />
                    ))}
                </View>);
            case "Segundo Cuatrimestre":
                return (<View>
                    {[...Array(3)].map((_, i) => (
                        <CollapsableItem initial="MW" perfil={true} name="Martinez Walter" note="8" key={i} />
                    ))}
                </View>);
            default:
                return null;
        }
    };

    return(
        <View>
            <SelectorCollapsible title = "Seleccionar" options = {['Primer Cuatrimestre', 'Segundo Cuatrimestre']} setActiveTab={(value) => setActiveTab(value)}/>
            <Title title= "Estudiantes" iconName="angle-right"></Title>
            {renderContent()}
        </View>
    );    
}