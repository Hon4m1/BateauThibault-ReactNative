import React from 'react';
import Title from "../../component/Title";
import { StyleSheet, Text, View, ImageBackground, Image, StatusBar } from 'react-native';
import Footer from '../../component/Footer';
import { images } from '../../constants/Images';

export default function bistrotDuSommelier(props){
    return(
        <View>
            <ImageBackground source={require("../../assets/background.png")} style={styles.image}></ImageBackground>
            <Title title="Bistrot Du Sommelier"></Title>
            <Image style={styles.img} fadeDuration={1000} source={require("../../assets/images/Restaurants/duSommelier.png")}></Image>
            <View style={styles.text}>
                <Text>XXX YYY ZZZ</Text>
                <Text>Qu'il est chaud le soleil</Text>
                <Text>Quand nous sommes en vacances</Text>
                <Text>Y a d'la joie, des hirondelles</Text>
                <Text>C'est le sud de la France</Text>
                <Text>Papa bricole au garage</Text>
                <Text>Maman lit dans la chaise longue</Text>
                <Text>Dans ce joli paysage</Text>
                <Text>Je me balade en tongs</Text>
            </View>
            <View style={styles.text}>
                <Text>Que du bonheur!</Text>
                <Text>Que du bonheur!</Text>
            </View>
            <Footer></Footer>
            <StatusBar style="auto" />
        </View>
    )
};

const styles=StyleSheet.create({
    image:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    img: {
        alignSelf: "center"
    },
    text : {
        alignSelf: "center"
    }
})