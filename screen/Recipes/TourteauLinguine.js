import { StyleSheet, Text, View, StatusBar, ImageBackground, Image } from 'react-native';
import React from 'react';

export default function TourteauLinguine(props) {
    return(<View style={styles.container}>
              <ImageBackground source={require("../../assets/background.png")} style={styles.imagebackground}>

                <View style={styles.main}>
                    <View style={styles.title}>
                        <Text style={styles.titleContent}>Tourteau Linguine</Text>
                    </View>
                    
                    <Image 
                    style={styles.image}
                    source = {require("../../assets/poulpe.png")}/>

                    <View style={styles.contenu}>
                        <Text>XXX YYY ZZZ</Text>
                    </View>
                </View>
                <View>
                    <Text>Qu'il est chaud le Soleil</Text>
                    <Text>Quand nous sommes en vacances</Text>
                    <Text>Y a d'la joie, des hirondelles</Text>
                    <Text>C'est le sud de la France</Text>
                    <Text>Papa bricole au garage</Text>
                    <Text>Maman lit dans la chaise longue</Text>
                    <Text>Dans ce joli paysage</Text>
                    <Text>Moi je me balade en tongs</Text>
                </View>
                <View style={styles.subfooter}>
                    <Text>Powered by blabla</Text>
                </View>
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

    footer: {
        flex: 3,
    },

    subfooter: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center"
    },

    imagebackground:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    title: {
      flex: 1,
      alignSelf: "center",
      marginTop: 50,
    },
    titleContent: {
        fontStyle: 'italic',
        fontSize: 25,
        color: 'white'
    },
    boldText: {
        fontWeight: "bold"
    },

    image:{
        flex: 5,
        justifyContent: "center",
        alignItems: "center",
        resizeMode: "contain"
    },
    contenu: {
      flex: 2,
      alignItems: "center",
      fontSize: 7,
    },
  });