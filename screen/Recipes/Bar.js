import { StyleSheet, Text, View, StatusBar, ImageBackground, Image } from 'react-native';
import { images } from '../../constants/Images'
import React from 'react';
import Footer from '../../component/Footer';
import Title from '../../component/Title'

export default function home(props) {
    return(<View style={styles.container}>
              <ImageBackground source={require("../../assets/background.png")} style={styles.imagebackground}>

                <View style={styles.main}>
                  <Title title="Bar"></Title>

                    <Image
                    style={styles.image}
                    source = {images.barRecette.url}/>
                </View>
                <View style={styles.footer}>
                    <Text>Sur une plaque ou plat allant au four, disposer</Text>
                    <Text>quelques feuilles de laurier frais,verser un filet</Text>
                    <Text>d'huile d'olive et du gros sel. Disposer le bar, puis </Text>
                    <Text>l'arroser d'un filet d'huile d'olive et mettre un peu de </Text>
                    <Text> gros sel sur la peau</Text>
                    <Text>Cuire au four 12min à 240°C</Text>

                </View>
                <View style={styles.subfooter}>
                    <Text>Powered by blabla</Text>
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

    footer: {
      flex: 3,
      marginLeft: 10,
      marginRight: 10,
      justifyContent: "center",
      alignItems: "center"
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
        
        marginLeft: "18%",
        justifyContent: "center",
        alignItems: "center",


    },
    contenu: {
      flex: 2,
      alignItems: "center",
      fontSize: 7,
    },
  });
