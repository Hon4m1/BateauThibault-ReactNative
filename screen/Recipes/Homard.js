import { StyleSheet, Text, View, StatusBar, ImageBackground, Image } from 'react-native';
import React from 'react';
import { images } from '../../constants/Images'
import Footer from '../../component/Footer';
import Title from '../../component/Title'

export default function home(props) {
    return(<View style={styles.container}>
              <ImageBackground source={require("../../assets/background.png")} style={styles.imagebackground}>

                <View style={styles.main}>
                  <Title title="Homard"></Title>

                    <Image
                    style={styles.image}
                    source = {images.homardRecette.url}/>
                </View>
                <View style={styles.footer}>
                    <Text>Faites cuire les homards dans de l'eau bouillante</Text>
                    <Text>avec du thym, du laurier, du sel, du poivre</Text>
                    <Text>de Cayenne. Laissez cuire 20 minutes. Egouttez</Text>
                    <Text>les et laissez les refroidir</Text>
                    <Text>Découpez les coffres des homards dans le sens</Text>
                    <Text>de la longueur</Text>
                    <Text>Mélangez la mayonnaise avec le cognac, le corail</Text>
                    <Text>et la ciboulette ciselée</Text>

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
