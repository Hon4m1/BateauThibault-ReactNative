import { StyleSheet, Text, View, StatusBar, ImageBackground, Image } from 'react-native';
import React from 'react';
import Button from '../component/Button';
import { images } from '../constants/Images';


export default function bateaux(props) {
    return(<View style={styles.container}>
              <ImageBackground source={require("../assets/background.png")} style={styles.image}>

                <View style={styles.main}>
                    <View style={styles.title}>
                        <Text style={styles.titleContent}>Nos bateaux partenaires</Text>
                    </View>
                    <View style={styles.contenu}>
                        <Text style={styles.boldText}>Toutes les eaux mènent à Thibault.</Text>
                        <Text>06.63.99.99.78</Text>
                        <Text>lebateaudethibault@gmail.com</Text>
                        <Text>www.facebook.com/lebateaudethibault</Text>
                    </View>
                </View>
                <View style={styles.buttons}>
                    <View style={styles.buttons1}>
                        <Button text="De La Brise" 
                        image={images.deLaBrise_icon.url}
                        screen={"bateaux/deLaBrise"}
                        navigation={props.navigation}
                        style={styles.button}></Button>
                        <Button text="Saphir"
                        image={images.saphir_icon.url}
                        screen={"bateaux/saphir"}
                        navigation={props.navigation}
                        style={styles.button}></Button>
                    </View>
                    <View style={styles.buttons1}>
                        <Button text="Gast Micher" 
                        image={images.gastMicher_icon.url}
                        screen={"bateaux/gastMicher"}
                        navigation={props.navigation}
                        style={styles.button}></Button>
                        <Button text="Aquilon"
                        image={images.aquilon_icon.url}
                        screen={"bateaux/aquilon"}
                        navigation={props.navigation}
                        style={styles.button}></Button>
                    </View>
                    <View style={styles.buttons2}>
                        <Button text="Contact" 
                        image={images.ancre.url}
                        screen={"contact"}
                        navigation={props.navigation}
                        style={styles.button}></Button>
                        <Button text="Contact" 
                        image={images.ancre.url}
                        screen={"contact"}
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