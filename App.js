import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {GridContainer} from './components/Grid'
import {ExitRestart} from './components/ExitRestart'
import {Home} from './components/Home'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { Store } from './redux/store';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={Store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" options={{headerShown: false}} component={Home} />
        <Stack.Screen name="GridContainer" options={{headerShown: false}} component={GridContainer} />
        <Stack.Screen name="ExitRestart" options={{headerShown: false}} component={ExitRestart} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    
  );
}

