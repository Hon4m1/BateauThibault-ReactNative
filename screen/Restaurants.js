import { StyleSheet, Text, View, StatusBar, ImageBackground, Image } from 'react-native';
import React from 'react';
import Button from '../component/Button';
import { images } from '../constants/Images';

export default function restaurants(props) {
    return(<View style={styles.container}>
              <ImageBackground source={require("../assets/background.png")} style={styles.image}>

                <View style={styles.main}>
                    <View style={styles.title}>
                        <Text style={styles.titleContent}>Restaurants partenaires</Text>
                    </View>
                    <View style={styles.contenu}>
                        <Text style={styles.contenuText}>Tous les restaurants partenaires avec le bateau de Thibault.</Text>
                        <Text style={styles.contenuText}>06.63.99.99.78</Text>
                        <Text style={styles.contenuText}>lebateaudethibault@gmail.com</Text>
                        <Text style={styles.contenuText}>www.facebook.com/lebateaudethibault</Text>
                    </View>
                </View>
                <View style={styles.buttons}>
                    <View style={styles.buttons1}>
                        <Button text="Bistrot des Gascons" 
                        screen={"restaurants/desGascons"}
                        navigation={props.navigation}
                        style={styles.button}></Button>
                        <Button text="Les fous de l'île"
                        screen={"restaurants/fousDeLIle"}
                        navigation={props.navigation}
                        style={styles.button}></Button>
                    </View>
                    <View style={styles.buttons1}>
                        <Button text="Bistrot Landais" 
                        screen={"restaurants/bistrotLandais"}
                        navigation={props.navigation}
                        style={styles.button}></Button>
                        <Button text="Villa 9-trois"
                        screen={"restaurants/villa9Trois"}
                        navigation={props.navigation}
                        style={styles.button}></Button>
                    </View>
                    <View style={styles.buttons2}>
                        <Button text="Bistrot du Sommelier" 
                        screen={"restaurants/BistrotDuSommelier"}
                        navigation={props.navigation}
                        style={styles.button}></Button>
                        <Button text="Devenez Partenaire!" 
                        screen={"restaurants/partenaire"}
                        navigation={props.navigation}
                        style={styles.button}></Button>
                    </View>
                </View>
                    
                <View style={styles.footer}>
                    <Text>Powered by BTK Inc.</Text>
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
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center"
    },

    image:{
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
        fontWeight: "bold",
    },
    contenuText: {
        fontSize: 13
    },
    contenu: {
      flex: 2,
      alignItems: "center",
      fontSize: 6,
    },

    mainButton: {
      flexDirection: "row",
    },
    buttons1: {
      flexDirection: "row",
    },
    buttons2: {
      flexDirection: "row",
    }
  });