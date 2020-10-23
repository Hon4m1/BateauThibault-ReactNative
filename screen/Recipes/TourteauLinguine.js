import { StyleSheet, Text, View, StatusBar, ImageBackground, Image } from 'react-native';
import React from 'react';
import Title from '../../component/Title'
import Footer from '../../component/Footer'
import { images } from '../../constants/Images'
import styles from '../../services/Style'


export default function TourteauLinguine(props) {
    return(<View style={styles.container}>
              <ImageBackground source={require("../../assets/background.png")} style={styles.imagebackground}>

                <View style={styles.main}>
                    <Title title="Tourteau Linguine"></Title>
                    
                    <Image 
                    style={styles.image}
                    source = {images.poulpe.url}/>

                    <View style={styles.Rcontenu}>
                        <Text>XXX YYY ZZZ</Text>
                    </View>
                </View>
                <View style={styles.Rcontenu}>
                    <Text>Qu'il est chaud le Soleil</Text>
                    <Text>Quand nous sommes en vacances</Text>
                    <Text>Y a d'la joie, des hirondelles</Text>
                    <Text>C'est le sud de la France</Text>
                    <Text>Papa bricole au garage</Text>
                    <Text>Maman lit dans la chaise longue</Text>
                    <Text>Dans ce joli paysage</Text>
                    <Text>Moi je me balade en tongs</Text>
                </View>
                <Footer></Footer>
                <StatusBar style="auto" />
                </ImageBackground>
            </View>
    )
}
