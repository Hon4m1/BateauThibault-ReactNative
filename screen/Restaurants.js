import { StyleSheet, Text, View, StatusBar, ImageBackground, Image } from 'react-native';
import React from 'react';
import Button from '../component/Button';
import Footer from '../component/Footer';
import Vcard from '../component/Vcard';
import Title from '../component/Title';
import styles from '../services/Style';


export default function restaurants(props) {
    return(<View style={styles.container}>
              <ImageBackground source={require("../assets/background.png")} style={styles.imagebackground}>

                <View style={styles.main}>
                    <Title title="Restaurants Partenaires"></Title>
                    <View style={styles.Rstcontenu}>
                        <Text style={styles.boldText}>Tous les restaurants partenaires avec le bateau de Thibault.</Text>
                        <Vcard></Vcard>
                    </View>
                </View>
                <View style={styles.buttons}>
                    <View style={styles.buttons1}>
                        <Button text="Bistrot des Gascons"
                        screen={"desGascons"}
                        navigation={props.navigation}
                        style={styles.button}></Button>
                        <Button text="Les fous de l'île"
                        screen={"fousDeLIle"}
                        navigation={props.navigation}
                        style={styles.button}></Button>
                    </View>
                    <View style={styles.buttons1}>
                        <Button text="Bistrot Landais"
                        screen={"bistrotLandais"}
                        navigation={props.navigation}
                        style={styles.button}></Button>
                        <Button text="Villa 9-trois"
                        screen={"villa9Trois"}
                        navigation={props.navigation}
                        style={styles.button}></Button>
                    </View>
                    <View style={styles.buttons2}>
                        <Button text="Bistrot du Sommelier"
                        screen={"bistrotDuSommelier"}
                        navigation={props.navigation}
                        style={styles.button}></Button>
                        <Button text="Devenez Partenaire!"
                        screen={"Partenaire"}
                        navigation={props.navigation}
                        style={styles.button}></Button>
                    </View>
                    <Footer></Footer>
                </View>
                <StatusBar style="auto" />
                </ImageBackground>
            </View>
    )
}

// const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   backgroundColor: '#fff',
    // },
    // main: {
    //   flex: 5
    // },
    // buttons: {
    //   flex: 4,
    // },
    // image:{
    //     flex: 1,
    //     resizeMode: "cover",
    //     justifyContent: "center"
    // },
    // boldText: {
    //     fontSize: 13,
    //     fontWeight: "bold",
    // },
  //   Rscontenu: {
  //     flex: 2,
  //     alignItems: "center",
  //     fontSize: 6,
  //   },
  //   Rsbutton1: {
  //     flexDirection: "row",
  //   },
  //   Rsbuttons2: {
  //     flexDirection: "row",
  //   }
  // });
