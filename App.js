import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './screen/Home'
import TourteauLinguine from './screen/Recipes/TourteauLinguine'
import Products from './screen/Products'
import { ReactReduxContext } from 'react-redux';
/*import (Provider) from 'react-redux'
import store from "./store/configurestore.js"*/

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name="TourteauLinguine" component={ TourteauLinguine } />
        <Stack.Screen name="home" component={ Home } />
        <Stack.Screen name="products" component={ Products } />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


