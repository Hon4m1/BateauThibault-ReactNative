import React from 'react';
import Title from "../../component/Title";
import { StyleSheet, Text, View, ImageBackground, Image, StatusBar } from 'react-native';
import Footer from '../../component/Footer';

export default function villa9Trois(props){
    return(
        <View style={styles.container}>
            <ImageBackground source={require("../../assets/background.png")} style={styles.imagebackground}>

              <View style={styles.main}>
                  <Title title="Fous de L'Île"></Title>

                  <Image style={styles.image} source={require("../../assets/images/Restaurants/villa9Trois.png")}/>

                  <View style={styles.conteneur}>
                    <Text style={styles.contacts}>XXX YYY ZZZ</Text>
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

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
        },
       main: {
          flex: 5
        },
        buttons: {
          flex: 4,
        },
        imagebackground:{
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center"
        },
        boldText: {
            fontWeight: "bold"
        },
        image:{
            flex: 5,
            justifyContent: "center",
            alignItems: "center",
            resizeMode: "contain",
            alignSelf: "center"
        },
        contacts: {
            fontFamily: "Noteworthy",
            alignSelf: "center",
            fontSize: 15
        },
        contenu: {
            fontFamily: "Noteworthy",
            alignSelf: "center",
            fontSize: 7
        },
        conteneur: {
            flex: 2
        },
        conteneur2: {
            flex : 1
        }
      });
