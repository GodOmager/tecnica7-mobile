import React, { useRef, useState } from 'react';
import { View, Dimensions, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import HomeScreen from './screen/HomeScreen';
import MailScreen from './screen/MailScreen';
import AcademicRecord from './screen/AcademicRecord';
import Analytics from './screen/Analytics';
import OptionsScreen from './screen/OptionsScreen';
import AdminScreen from "./screen/AdminScreen";
import LoginScreen from "./screen/LoginScreen";
import AttendanceScreen from "./screen/AttendanceScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StudentScreen from "./screen/StudentScreen";
import StudentsListScreen from "./screen/StudentsListScreen";


const OptionsStack = createNativeStackNavigator();
function OptionsStackNavigator() {
  return (
    <OptionsStack.Navigator screenOptions={{ headerShown: false }}>
      <OptionsStack.Screen name="OptionsScreen" component={OptionsScreen} />
      <OptionsStack.Screen name="AdminScreen" component={AdminScreen}
        options={{
          title: "Mi cuenta",
          headerShown: true, // muestra el header
          headerBackVisible: true,
          
          headerTitleStyle: { color: '#000', fontSize: 24, fontWeight: "600" },
          headerTintColor: "#030A8C",
        }}
      />
      <OptionsStack.Screen name="StudentScreen" component={StudentScreen} 
        options={{
          title: "Alumno",
          headerShown: true, // muestra el header
          headerBackVisible: true,
          
          headerTitleStyle: { color: '#000', fontSize: 24, fontWeight: "600" },
          headerTintColor: "#030A8C",
        }}
      />
      <OptionsStack.Screen name="StudentsListScreen" component={StudentsListScreen} 
        options={{
          title: "Alumnos",
          headerShown: true, // muestra el header
          headerBackVisible: true, //iconito de volver
          
          headerTitleStyle: { color: '#000', fontSize: 24, fontWeight: "600" },
          headerTintColor: "#030A8C",
        }}
      />
      <OptionsStack.Screen name="AttendanceScreen" component={AttendanceScreen} 
        options={{
          title: "Asistencia",
          headerShown: true, // muestra el header
          headerBackVisible: true,
          
          headerTitleStyle: { color: '#000', fontSize: 24, fontWeight: "600" },
          headerTintColor: "#030A8C",
        }}
      />
    </OptionsStack.Navigator>
  );
}


const HomeStack = createNativeStackNavigator();
function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="StudentScreen" component={StudentScreen} 
        options={{
          title: "Alumno",
          headerShown: true, // muestra el header
          headerBackVisible: true,
          
          headerTitleStyle: { color: '#000', fontSize: 24, fontWeight: "600" },
          headerTintColor: "#030A8C",
        }}
      />
      <HomeStack.Screen name="StudentsListScreen" component={StudentsListScreen} 
        options={{
          title: "Alumnos",
          headerShown: true, // muestra el header
          headerBackVisible: true, //iconito de volver
          
          headerTitleStyle: { color: '#000', fontSize: 24, fontWeight: "600" },
          headerTintColor: "#030A8C",
        }}
      />
    </HomeStack.Navigator>
  );
}


const AcademicRecordStack = createNativeStackNavigator();
function AcademicRecordStackNavigator() {
  return (
    <AcademicRecordStack.Navigator screenOptions={{ headerShown: false }}>
      <AcademicRecordStack.Screen name="AcademicRecord" component={AcademicRecord} />
      <AcademicRecordStack.Screen name="StudentScreen" component={StudentScreen} 
        options={{
          title: "Alumno",
          headerShown: true, // muestra el header
          headerBackVisible: true,
          
          headerTitleStyle: { color: '#000', fontSize: 24, fontWeight: "600" },
          headerTintColor: "#030A8C",
        }}
      />
      <AcademicRecordStack.Screen name="StudentsListScreen" component={StudentsListScreen}
        options={{
          title: "Alumnos",
          headerShown: true, // muestra el header
          headerBackVisible: true, //iconito de volver
          
          headerTitleStyle: { color: '#000', fontSize: 24, fontWeight: "600" },
          headerTintColor: "#030A8C",
        }}
      />
    </AcademicRecordStack.Navigator>
  );
}


const TAB_ICONS = ['home', 'envelope', 'book', 'chart-bar', 'cog'];
const COLOR_BLUE = '#030A8C';
const INDICATOR_SIZE = 50;
const MARGIN = 12;

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const TAB_WIDTH = (SCREEN_WIDTH - MARGIN * 2) / 5;

function TabBarIndicator({ index }) {
  const left = useSharedValue((TAB_WIDTH - INDICATOR_SIZE) / 2);

  React.useEffect(() => {
    left.value = withTiming(index * TAB_WIDTH + (TAB_WIDTH - INDICATOR_SIZE) / 2, { duration: 300 });
  }, [index]);

  const animatedStyle = useAnimatedStyle(() => ({
    left: left.value,
  }));

  return (
    <Animated.View
      style={[
        styles.indicator,
        animatedStyle,
      ]}
    />
  );
}


const Tab = createBottomTabNavigator();
function BottomTabNavegator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Mail':
              iconName = 'envelope';
              break;
            case 'Courses':
              iconName = 'book';
              break;
            case 'Performance':
              iconName = 'chart-bar';
              break;
            case 'Options':
              iconName = 'cog';
              break;
          }

          return (
            <FontAwesome5
              name={iconName}
              size={21}
              color={focused ? COLOR_BLUE : 'white'}
              solid
            />
          );
        },
      })}
      tabBar={({ state, descriptors, navigation }) => {
        return (
          <View style={styles.navigator}>
            <TabBarIndicator index={state.index} />
            {state.routes.map((route, index) => {
              const { options } = descriptors[route.key];
              const isFocused = state.index === index;

              const onPress = () => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                });

                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name);
                }
              };

              const icon = options.tabBarIcon({
                focused: isFocused,
                color: isFocused ? COLOR_BLUE : 'white',
                size: 21,
              });

              return (
                <View key={route.key} style={styles.tabWrapper}>
                  <View style={styles.tabButton} onTouchEnd={onPress}>
                    {icon}
                  </View>
                </View>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Mail" component={MailScreen} />
      <Tab.Screen name="Courses" component={AcademicRecordStackNavigator} />
      <Tab.Screen name="Performance" component={Analytics} />
      {<Tab.Screen name="Options" component={OptionsStackNavigator} />}
    </Tab.Navigator>
  );
}

const RootStack = createNativeStackNavigator();

export default function App() {
  const activeIndex = useSharedValue(0);

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Login" component={LoginScreen} />
        <RootStack.Screen name="App" component={BottomTabNavegator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    display: 'none', 
  },
  navigator: {
    position: 'absolute',
    bottom: MARGIN,
    left: MARGIN,
    right: MARGIN,
    height: 70,
    backgroundColor: COLOR_BLUE,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
  },
  tabWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  tabButton: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    position: 'absolute',
    bottom: 10,
    width: INDICATOR_SIZE,
    height: INDICATOR_SIZE,
    backgroundColor: 'white',
    borderRadius: INDICATOR_SIZE / 2,
    zIndex: 0,
  },
});

