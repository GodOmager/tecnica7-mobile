// TopTabNavigator.js
import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { Image } from 'react-native';

import Message from "../component/Message";

const Tab = createMaterialTopTabNavigator();

function noContent() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../../assets/noContentEmail.png')} style={styles.eventNoFeriadoImg}/>
        <Text style={{fontSize: 16, color: "#030A8C", fontWeight: 700, paddingBottom: 8}}>Nada por ahora, ¡Rompe el hielo!</Text>
        <Text style={{fontSize: 12, width: "70%", textAlign: "center", lineHeight: 16, color: "#666"}}>Los mensajes enviados se visualizaran aqui ¿Que esperas para enviar uno?</Text>
    </View>
  );
}

export default function TopTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#fff', display: "flex", flexDirection: "row" },
        tabBarIndicatorStyle: { backgroundColor: '#030A8C', height: 3, borderRadius: 4},
        tabBarActiveTintColor: '#030A8C',
        tabBarInactiveTintColor: '#666',
        tabBarLabelStyle: { fontWeight: '400' },
        
      }}
    >
      <Tab.Screen 
        name="received" 
        children={() => (
            <View>
                {[...Array(30)].map((_, i) => (
                    <Message key={i} leido={false} />
                ))}
            </View>
        )}
        options={{
          tabBarLabel: ({ color }) => (
            <View style={{ flexDirection: 'row', gap: 6 }}>
              <FontAwesome5 name="envelope-open" size={16} color={color} />
              <Text style={{ color }}>Recibidos</Text>
            </View>
          ),
        }}
        />
      <Tab.Screen 
        name="sent" 
        children={() => (
            noContent()
        )}
        options={{
          tabBarLabel: ({ color }) => (
            <View style={{ flexDirection: 'row', gap: 6 }}>
              <FontAwesome5 name="paper-plane" size={16} color={color} />
              <Text style={{ color }}>Enviados</Text>
            </View>
          ),
        }}
        />
      <Tab.Screen 
        name="deleted" 
        children={() => (
            <View>
                {[...Array(8)].map((_, i) => (
                    <Message key={i} leido={true} />
                ))}
            </View>
        )} 
        options={{
          tabBarLabel: ({ color }) => (
            <View style={{ flexDirection: 'row', gap: 6 }}>
              <FontAwesome5 name="trash-alt" size={16} color={color} />
              <Text style={{ color }}>Papelera</Text>
            </View>
          ),
        }}
        />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  eventNoFeriadoImg:{
    height: 400,
    aspectRatio: 1,
  }
});