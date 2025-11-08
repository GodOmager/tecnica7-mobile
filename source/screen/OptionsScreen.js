import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationIndependentTree, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from '@react-navigation/elements';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is the home screen!</Text>
      <Button onPress={() => navigation.navigate('MyModal')}>Open Modal</Button>
    </View>
  );
}

function ModalScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: "70vh" }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()}>Dismiss</Button>
    </View>
  );
}

const RootStack = createStackNavigator();

function App() {
  return (
    <NavigationIndependentTree>
      <RootStack.Navigator>
        <RootStack.Group>
          <RootStack.Screen name="l" component={HomeScreen} />
        </RootStack.Group>

        <RootStack.Group screenOptions={{ presentation: 'modal' }}>
          <RootStack.Screen name="MyModal" component={ModalScreen} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationIndependentTree>
  );
}

export default App;
