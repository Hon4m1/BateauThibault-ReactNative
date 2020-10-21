import React from 'react';
import Title from "../../component/Title";
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import Footer from '../../component/Footer';
import { images } from '../../constants/Images';

export default function fousDeLIle(props){
    return(
        <View style={styles.container}>
            <ImageBackground source={require("../../assets/background.png")} resizeMode="cover" style={styles.image}>
                <Title title="Les Fous De L'Île"></Title>
                <Image style={styles.img} fadeDuration={1000} resizeMethod="scale" resizeMode="cover" source={require("../../assets/images/Restaurants/fousDeLIle.png")}></Image>
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
        resizeMode: "cover",
        justifyContent: "center"
    },
    img: {
        flex: 5,
    },
    first: {
        alignSelf: "center"
    },
    second: {
        alignSelf: "center"
    },
    main: {
        flex: 5,
        alignSelf: "center"
      },
    text: {
        fontSize: 18,
        bottom: 20,
        alignSelf: "center"
    }
})