import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // si lo usás

import Header from "../component/Header";
import CollapsableItem from './CollapsibleItem';
import Title from "./Title";

export default function StudentRecords() {
    return(
        <View>
            <Title title= "Estudiantes" iconName="angle-right"></Title>
            <View>
                {[...Array(10)].map((_, i) => (
                    <CollapsableItem initial = "MW" perfil={true} name = "Martinez Walter" note = "8" key={i} />
                ))}
            </View>
        </View>
    );    
}