import React from 'react';
import Title from "../../component/Title";
import { Text, View, ImageBackground, Image, StatusBar } from 'react-native';
import Footer from '../../component/Footer';
import styles from '../../services/Style';
import Json from '../../services/text'

export default function desGascon(props){
    return(
        <View style={styles.container}>
        <ImageBackground source={require("../../assets/background.png")} style={styles.imagebackground}>

          <View style={styles.main}>
              <Title title={Json.restaurants.desGascons.Title}></Title>

              <Image style={styles.image} source={Json.restaurants.desGascons.img} fadeDuration={900}/>

              <View style={styles.conteneur}>
                <Text style={styles.contacts}>{Json.restaurants.desGascons.legend}</Text>
              </View>
          </View>
          <View style={styles.conteneur}>
              <Text style={styles.contenu}>Qu'il est chaud le Soleil</Text>
              <Text style={styles.contenu}>Quand nous sommes en vacances</Text>
              <Text style={styles.contenu}>Y a d'la joie, des hirondelles</Text>
              <Text style={styles.contenu}>C'est le sud de la France</Text>
              <Text style={styles.contenu}>Papa bricole au garage</Text>
              <Text style={styles.contenu}>Maman lit dans la chaise longue</Text>
              <Text style={styles.contenu}>Dans ce joli paysage</Text>
              <Text style={styles.contenu}>Moi je me balade en tongs</Text>
          </View>
          <View style={styles.conteneur2}>
          <Text style={styles.contenu}>Que du bonheur!</Text>
          <Text style={styles.contenu}>Que du bonheur!</Text>
          </View>
          <Footer></Footer>
          <StatusBar style="auto" />
          </ImageBackground>
      </View>
)
}