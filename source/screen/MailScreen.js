import { StyleSheet, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // si lo usás
import { FontAwesome5 } from '@expo/vector-icons';

import { NavigationIndependentTree, useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TopTabNavigator from '../nav/TopTabs';

import Header from "../component/Header";
import Message from "../component/Message";

const Tab = createMaterialTopTabNavigator();

export default function OptionsScreen () {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={styles.contentContainer} style={styles.screen}>
                <Header title="Mensajes" iconName="search"></Header>
                <NavigationIndependentTree>
                    <TopTabNavigator />
                </NavigationIndependentTree>
            </ScrollView>
        </SafeAreaView>
            
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#f5f5f5"
    },
    contentContainer: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingBottom: 72,
    }
})

