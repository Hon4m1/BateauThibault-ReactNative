import { StyleSheet, Text, View, StatusBar, ImageBackground, Image } from 'react-native';
import Button from '../component/Button';
import { images } from '../constants/Images'
import React from 'react';
import Title from '../component/Title'
import Footer from '../component/Footer'

export default function home(props) {
    return(<View style={styles.container}>
              <ImageBackground source={require("../assets/background.png")} style={styles.image}>

                <View style={styles.main}>
                    <Title title="Le bateau de Thibault"></Title>
                    <View style={styles.contenu}>
                        <Text style={styles.boldText}>Vente en direct de notre bateau</Text>
                        <Text style={styles.boldText}>Produits selon la saison, Livraison sur Paris</Text>
                        <Text>06.63.99.99.78</Text>
                        <Text>lebateaudethibault@gmail.com</Text>
                        <Text>www.facebook.com/lebateaudethibault</Text>
                    </View>
                </View>
                <View style={styles.buttons}>
                    <View style={styles.mainButton}>
                        <Button text="Produits et promotions"
                            image={images.poisson.url}
                            screen={"products"}
                            navigation={props.navigation}
                            style={styles.button}></Button>
                    </View>
                    <View style={styles.buttons1}>
                        <Button text="Bateaux" 
                        image={images.ancre.url}
                        screen={"bateaux"}
                        navigation={props.navigation}
                        style={styles.button}></Button>
                        <Button text="Restaurants"
                        image={images.restaurant.url}
                        screen={"restaurants"}
                        navigation={props.navigation}
                        style={styles.button}></Button>
                    </View>
                    <View style={styles.buttons2}>
                        <Button text="Recettes" 
                        image={images.recette.url}
                        screen={"recettes"}
                        navigation={props.navigation}
                        style={styles.button}></Button>
                        <Button text="Contact" 
                        image={images.tourteau.url}
                        screen={"contact"}
                        navigation={props.navigation}
                        style={styles.button}></Button>
                    </View>
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
    image:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    boldText: {
        fontWeight: "bold"
    },
    contenu: {
      flex: 2,
      alignItems: "center",
      fontSize: 7,
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