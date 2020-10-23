import { StyleSheet, Text, View, StatusBar, ImageBackground, Image } from 'react-native';
import React from 'react';
import styles from '../../services/Style';
import Footer from '../../component/Footer';
import Title from '../../component/Title';
import Json from '../../services/text';

export default function bar(props) {
    return(<View style={styles.container}>
              <ImageBackground source={require("../../assets/background.png")} style={styles.imagebackground}>

                <View style={styles.main}>
                  <Title title={Json.recipes.bar.Title}></Title>

                    <Image
                    style={styles.image}
                    source = {Json.recipes.bar.img}/>
                </View>
                <View style={styles.Rcontenu}>
                    <Text>Sur une plaque ou plat allant au four, disposer</Text>
                    <Text>quelques feuilles de laurier frais,verser un filet</Text>
                    <Text>d'huile d'olive et du gros sel. Disposer le bar, puis </Text>
                    <Text>l'arroser d'un filet d'huile d'olive et mettre un peu de </Text>
                    <Text> gros sel sur la peau</Text>
                    <Text>Cuire au four 12min à 240°C</Text>

                </View>
                <Footer></Footer>
                <StatusBar style="auto" />
                </ImageBackground>
            </View>
    )
}