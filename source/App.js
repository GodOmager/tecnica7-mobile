 import React, { useRef } from 'react';
import { View, Dimensions, StyleSheet, Platform } from 'react-native';
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
import OptionsScreen from './screen/OptionsScreen';
import CourseSelector from './component/CourseSelector';

const Tab = createBottomTabNavigator();

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

export default function App() {
  const activeIndex = useSharedValue(0);

  return (
    <NavigationContainer>
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
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Mail" component={MailScreen} />
        <Tab.Screen name="Courses" component={CourseSelector} />
        <Tab.Screen name="Performance" component={OptionsScreen} />
        <Tab.Screen name="Options" component={OptionsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    display: 'none', // ocultamos el tabBar nativo para usar el personalizado
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

