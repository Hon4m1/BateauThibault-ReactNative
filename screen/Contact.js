import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, StatusBar } from 'react-native'
import Title from '../component/Title'
import Footer from '../component/Footer'

export default function Contact(props) {
    return (
        <View style={StyleSheet.container}>
            <ImageBackground source={require("../assets/background.png")} style={styles.image}>
                <Title title="Le Bateau de Thibault"></Title>
                <Image style={styles.img} resizeMethod="scale" resizeMode="center" source={require("../assets/images/TIG3x.png")} fadeDuration={1000} ></Image>
                    <View style={styles.main}>
                        <View style={styles.infos}>
                            <Text>06.63.99.99.78</Text>
                            <Text>lebateaudethibault@gmail.com</Text>
                            <Text>www.facebook.com/lebateaudethibault</Text>
                        </View>
                        <View style={styles.first}>
                            <Text>Qu'il est chaud le soleil</Text>
                            <Text>Quand nous sommes en vacances</Text>
                            <Text>Y a d'la joie, des hirondelles</Text>
                            <Text>C'est le sud de la France</Text>
                            <Text>Papa bricole au garage</Text>
                            <Text>Maman lit dans la chaise longue</Text>
                            <Text>Dans ce joli paysage</Text>
                            <Text>Je me balade en tongs</Text>
                        </View>
                    </View>
                <StatusBar></StatusBar>
                <Footer></Footer>
            </ImageBackground>
        </View>
    )
};

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    img: {
        alignSelf: "center",
    },
    image:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    first: {
        flex: 1,
        alignSelf: "center"
    },
    text: {
        alignSelf: "center",
        fontSize: 12
    },
    main: {
        flex: 5
      },
    info: {
        fontFamily: "Noteworthy"
    }
})