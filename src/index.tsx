/**
 * This is the entry point of our project.
 * Here, it's defined the main stack for the app
 * and also it's where its screens are configured.
 */
import React from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import { RootStackParamList } from './types';
import QuizScreen from './screens/QuizScreen';
import ResultScreen from './screens/ResultScreen';

const RootStack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
        }}
      >
        <RootStack.Screen name="HomeScreen" component={HomeScreen} />
        <RootStack.Screen name="QuizScreen" component={QuizScreen} />
        <RootStack.Screen name="ResultScreen" component={ResultScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

registerRootComponent(App);
