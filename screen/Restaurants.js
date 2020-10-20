import React from 'react';
import Title from "../component/Title";
import { View, StyleSheet, Text } from "react-native";
import Footer from '../component/Footer';

export default function restaurant(props, place){
    return(
        <View>
            <Title title={place}></Title>
            <image style={styles.img} src={require({props})}></image>
            <View>
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
            <View>
                <Text>Que du bonheur!</Text>
                <Text>Que du bonheur!</Text>
            </View>
            <Footer></Footer>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        alignSelf: "center"
    }
});