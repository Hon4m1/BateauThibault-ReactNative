import { StyleSheet, Text, View, StatusBar, ImageBackground } from 'react-native';
import Button from '../component/Button';
import { images } from '../constants/Images';
import React from 'react';
import Title from '../component/Title';
import Footer from '../component/Footer';
import Json from '../services/text';
import Vcard from '../component/Vcard';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

/*const fetchFonts = () => {
  return Font.loadAsync({
    'SnellRoundHand': require('../assets/fonts/SnellRoundhand.ttf'),
    'Noteworthy-Bold': require('../assets/fonts/Noteworthy-Font/Noteworthy-Bold.ttf'),
    'Noteworthy': require('../assets/fonts/Noteworthy-Font/Noteworthy-Lt.ttf')
  });
};*/

export default class Home extends React.Component  {
  state = {
    isLoaded: false,
  };

    render() {
      if(!this.state) {
        return (
          <AppLoading
            startAsync={fetchFonts}
            onFinish={() => this.setState({isLoaded : true})}
            onError = {console.warn}
            />
        )
      }
    return(<View style={styles.container}>
              <ImageBackground source={require("../assets/background.png")} style={styles.image}>
                <View style={styles.main}>
                    <Title title={Json.contact.Title}></Title>
                    <View style={styles.contenu}>
                        <Text style={styles.boldText}>Vente en direct de notre bateau</Text>
                        <Text style={styles.boldText}>Produits selon la saison, Livraison sur Paris</Text>
                        <Vcard></Vcard>
                    </View>
                </View>
                <View style={styles.buttons}>
                    <View style={styles.mainButton}>
                        <Button text="Produits et promotions"
                            image={images.poisson.url}
                            screen={"products"}
                            navigation={this.props.navigation}
                            style={styles.button}></Button>
                    </View>
                    <View style={styles.buttons1}>
                        <Button text="Bateaux"
                        image={images.ancre.url}
                        screen={"bateaux"}
                        navigation={this.props.navigation}
                        style={styles.button}></Button>
                        <Button text="Restaurants"
                        image={images.restaurant.url}
                        screen={"restaurants"}
                        navigation={this.props.navigation}
                        style={styles.button}></Button>
                    </View>
                    <View style={styles.buttons2}>
                        <Button text="Recettes"
                        image={images.recette.url}
                        screen={"recettes"}
                        navigation={this.props.navigation}
                        style={styles.button}></Button>
                        <Button text="Contact"
                        image={images.tourteau.url}
                        screen={"Contact"}

                        navigation={this.props.navigation}
                        style={styles.button}></Button>
                    </View>
                    <Footer></Footer>
                </View>
                <StatusBar style="auto" />
              </ImageBackground>
            </View>
    )
    }
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
