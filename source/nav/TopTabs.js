import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import { fakeMessages } from "../fakeMessages";



import Message from "../component/Message";

const Tab = createMaterialTopTabNavigator();

function noContent() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('../../assets/noContentEmail.png')} style={styles.eventNoFeriadoImg} />
      <Text style={{ fontSize: 16, color: "#030A8C", fontWeight: 700, paddingBottom: 8 }}>
        Nada por ahora, ¡Rompe el hielo!
      </Text>
      <Text style={{ fontSize: 12, width: "70%", textAlign: "center", lineHeight: 16, color: "#666" }}>
        Los mensajes enviados se visualizarán aquí ¿Qué esperas para enviar uno?
      </Text>
    </View>
  );
}

export default function TopTabNavigator({ sentMessages = [] }) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#fff', display: "flex", flexDirection: "row" },
        tabBarIndicatorStyle: { backgroundColor: '#030A8C', height: 3, borderRadius: 4 },
        tabBarActiveTintColor: '#030A8C',
        tabBarInactiveTintColor: '#666',
        tabBarLabelStyle: { fontWeight: '400' },
      }}
    >

      <Tab.Screen
        name="received"
        children={() => (
          <ScrollView >
            {fakeMessages
              .filter(m => !m.deleted)
              .map((msg) => (
                <Message
                  key={msg.id}
                  leido={msg.read}
                  title={msg.title}
                  preview={msg.preview}
                  from={msg.from}
                  date={msg.date}
                  
                />
              ))}
          </ScrollView>
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
          sentMessages.length === 0 ? (
            noContent()
          ) : (
            <ScrollView>
              {sentMessages.map((msg, index) => (
                <Message
                  key={index}
                  leido={true}
                  title={msg.subject}
                  preview={msg.body}
                  from={msg.to}
                  date={msg.date}
                />
              ))}
            </ScrollView>
          )
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
          <ScrollView>
            {fakeMessages
              .filter(m => m.deleted)
              .map((msg) => (
                <Message
                  key={msg.id}
                  leido={true}
                  title={msg.title}
                  preview={msg.preview}
                  from={msg.from}
                  date={msg.date}
                />
              ))}
          </ScrollView>
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
  eventNoFeriadoImg: {
    height: 400,
    aspectRatio: 1,
  },
});
