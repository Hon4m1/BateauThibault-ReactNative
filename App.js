import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './screen/Home'
import TourteauLinguine from './screen/Recipes/TourteauLinguine'
import { Provider, ReactReduxContext } from 'react-redux';
import Homard from './screen/Recipes/Homard'
import Bar from './screen/Recipes/Bar'
import StJacques from './screen/Recipes/StJacques'
import Recette from './screen/Recipes/Recette'
/*import (Provider) from 'react-redux'
import store from "./store/configurestore.js"*/
import deLaBrise from './screen/bateaux/deLaBrise'
import aquilon from './screen/bateaux/aquilon'
import gastMicher from './screen/bateaux/gastMicher'
import saphir from './screen/bateaux/saphir'
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
            <Stack.Screen name="deLaBrise" component={ deLaBrise } />
            <Stack.Screen name="products" component={ Products } />
            
            <Stack.Screen name="productsList" component={ productsList } />
            <Stack.Screen name="restaurants" component={ Restaurants } />
            <Stack.Screen name="recettes" component={ Recettes } />
            <Stack.Screen name="TourteauLinguine" component={ TourteauLinguine } />

            <Stack.Screen name="aquilon" component={ aquilon } />
            <Stack.Screen name="gastMicher" component={ gastMicher } />
            <Stack.Screen name="saphir" component={ saphir } />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>

  );
}
