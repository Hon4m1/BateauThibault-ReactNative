import { Text, View, StatusBar, ImageBackground, Image } from 'react-native';
import React from 'react';
import styles from '../../services/Style'
import { images } from '../../constants/Images';
import Footer from '../../component/Footer';
import Title from '../../component/Title';

export default function home(props) {
    return(<View style={styles.container}>
              <ImageBackground source={require("../../assets/background.png")} style={styles.imagebackground}>

                <View style={styles.main}>
                <Title title="Recette XYZ"></Title>

                    <Image
                    style={styles.image}
                    source = {images.poulpe.url}/>

                    <View style={styles.contenu}>
                        <Text>XXX YYY ZZZ</Text>
                    </View>
                </View>
                <View style={styles.footer}>
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