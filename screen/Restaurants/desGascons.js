import React from 'react';
import Title from "../../component/Title";
import { StyleSheet, Text, View, ImageBackground, Image, StatusBar } from 'react-native';
import Footer from '../../component/Footer';
import images from '../../constants/Images';

export default function desGascon(props){
    return(
        <View style={styles.container}>
            <ImageBackground source={require("../../assets/background.png")} fadeDuration={1000} style={styles.image}>
                <Title title="Bistrot Des Gascons"></Title>
                <Image style={styles.img} resizeMethod="scale" resizeMode="center" source={require("../../assets/images/Restaurants/desGascons.png")} fadeDuration={1000} ></Image>
                <View style={styles.first}>
                    <Text style={styles.text}>XXX YYY ZZZ</Text>
                    <Text>Qu'il est chaud le soleil</Text>
                    <Text>Quand nous sommes en vacances</Text>
                    <Text>Y a d'la joie, des hirondelles</Text>
                    <Text>C'est le sud de la France</Text>
                    <Text>Papa bricole au garage</Text>
                    <Text>Maman lit dans la chaise longue</Text>
                    <Text>Dans ce joli paysage</Text>
                    <Text>Je me balade en tongs</Text>
                </View>
                <View style={styles.second}>
                    <Text>Que du bonheur!</Text>
                    <Text>Que du bonheur!</Text>
                </View>
                <Footer></Footer>
            </ImageBackground>
        </View>
    )
};

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
    image:{
        flex: 1,
        flexDirection: "column",
        resizeMode: "cover",
        justifyContent: "center"

    },
    img: {
        flex: 4,
        flexDirection: "column"
    },
    first: {
        alignSelf: "center",
        fontSize: 12
    },
    second: {
        alignSelf: "center",
        fontSize: 12
    },
    text: {
        fontSize: 18,
        bottom: 20,
        alignSelf: "center"
    }
})