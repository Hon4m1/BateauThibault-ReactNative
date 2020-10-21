import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './screen/Home'
import TourteauLinguine from './screen/Recipes/TourteauLinguine'
import { Provider, ReactReduxContext } from 'react-redux';
/*import (Provider) from 'react-redux'
import store from "./store/configurestore.js"*/
import batDeLaBrise from './screen/bateaux/deLaBrise'
import batAquilon from './screen/bateaux/aquilon'
import batGastMicher from './screen/bateaux/gastMicher'
import batSaphir from './screen/bateaux/saphir'
import Products from './screen/Products'
import productsList from './screen/productsList'
import Bateaux from './screen/Bateaux'
import Recettes from './screen/Recettes'
import Restaurants from './screen/Restaurants'
import store  from './store/configureStore'

const Stack = createStackNavigator();

export default function App() {
  return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false}}>    
            <Stack.Screen name="home" component={ Home } />
            <Stack.Screen name="bateaux" component={ Bateaux } />
            <Stack.Screen name="De La Brise" component={ batDeLaBrise } />
            <Stack.Screen name="products" component={ Products } />
            
            <Stack.Screen name="productsList" component={ productsList } />
            <Stack.Screen name="restaurants" component={ Restaurants } />
            <Stack.Screen name="recettes" component={ Recettes } />
            <Stack.Screen name="TourteauLinguine" component={ TourteauLinguine } />

            <Stack.Screen name="Aquilon" component={ batAquilon } />
            <Stack.Screen name="Gast Micher" component={ batGastMicher } />
            <Stack.Screen name="Saphir" component={ batSaphir } />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  );
}
