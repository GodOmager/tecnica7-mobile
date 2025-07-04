import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from "@expo/vector-icons";
import CourseSelector from "./component/CourseSelector"
import HomeScreen from "./screen/HomeScreen";
import MailScreen from "./screen/MailScreen";
import OptionsScreen from "./screen/OptionsScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={
                {
                    tabBarStyle: {
                        backgroundColor: '#222',
                        height: 60,
                    },
                    tabBarActiveTintColor: 'white',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                }
            }
        >
            
            <Tab.Screen
                name = "Home"
                component = {HomeScreen}
            />
            <Tab.Screen
                name = "Mail"
                component = {MailScreen}
            />
            <Tab.Screen
                name = "Options"
                component = {OptionsScreen}
            />
        </Tab.Navigator>
    </NavigationContainer>
  );
}
