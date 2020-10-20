import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { Provider } from 'react-redux';
// import store from './store/configureStore';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//import { Provider } from 'react-redux';
//import store from './store/configurationStore';

import Home from './screen/Home'
import batDeLaBrise from './screen/bateaux/deLaBrise'
import Products from './screen/Products'
import Bateaux from './screen/Bateaux'
import Recettes from './screen/Recettes'
import Restaurants from './screen/Restaurants'

const Stack = createStackNavigator();

export default function App() {
  return (   
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false}}>
          <Stack.Screen name="home" component={ Home } />
          <Stack.Screen name="products" component={ Products } />
          <Stack.Screen name="bateaux" component={ Bateaux } />
          <Stack.Screen name="recettes" component={ Recettes } />
          <Stack.Screen name="restaurants" component={ Restaurants } />
          <Stack.Screen name="De La Brise" component={ batDeLaBrise } />


        </Stack.Navigator>
      </NavigationContainer>
  );
}
