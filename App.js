import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './screen/Home'
import TourteauLinguine from './screen/Recipes/TourteauLinguine'
import { ReactReduxContext } from 'react-redux';
/*import (Provider) from 'react-redux'
import store from "./store/configurestore.js"*/
import batDeLaBrise from './screen/bateaux/deLaBrise'
import Products from './screen/Products'
import Bateaux from './screen/Bateaux'
import Recettes from './screen/Recettes'
import Restaurants from './screen/Restaurants'
import desGascons from './screen/Restaurants/desGascons'
import bistrotDuSommelier from './screen/Restaurants/bistrotDuSommelier'
import bistrotLandais from './screen/Restaurants/bistrotLandais'
import fousDeLIle from './screen/Restaurants/fousDeLIle'
import villa9Trois from './screen/Restaurants/villa9Trois'
import Contact from './screen/Contact'


const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false}}>
          <Stack.Screen name="home" component={ Home } />
          <Stack.Screen name="products" component={ Products } />
          <Stack.Screen name="bateaux" component={ Bateaux } />
          <Stack.Screen name="restaurants" component={ Restaurants } />
          <Stack.Screen name="recettes" component={ Recettes } />
          <Stack.Screen name="De La Brise" component={ batDeLaBrise } />
          <Stack.Screen name="TourteauLinguine" component={ TourteauLinguine } />
          <Stack.Screen name="desGascons" component={ desGascons } />
          <Stack.Screen name="bistrotDuSommelier" component={ bistrotDuSommelier } />
          <Stack.Screen name="bistrotLandais" component={ bistrotLandais } />
          <Stack.Screen name="fousDeLIle" component={ fousDeLIle } />
          <Stack.Screen name="villa9Trois" component={ villa9Trois } />
          <Stack.Screen name="Contact" component={ Contact } />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
