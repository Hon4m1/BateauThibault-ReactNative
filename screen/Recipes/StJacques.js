import { StyleSheet, Text, View, StatusBar, ImageBackground, Image } from 'react-native';
import React from 'react';
import { images } from '../../constants/Images';
import Footer from '../../component/Footer';
import Title from '../../component/Title';
import styles from '../../services/Style';
import Json from '../../services/text'


export default function home(props) {
    return(<View style={styles.container}>
              <ImageBackground source={require("../../assets/background.png")} style={styles.imagebackground}>

                <View style={styles.main}>
                <Title title="Noix de Saint-Jacques - flambées au Cognac"></Title>
                    <Image
                    style={styles.image}
                    source = {Json.recipes.stJacques.img}/>
                </View>
                <View style={styles.Rcontenu}>
                    <Text>Faire fondre du beurre avec des échalotes puis  </Text>
                    <Text>ajouter les noix de Saint-Jacques. Les faire revenir </Text>
                    <Text>en laissant les milieu translucide puis les retirer du </Text>
                    <Text>feu.</Text>
                    <Text> Ajouter l'ail et le persil dans la poêle et laisser </Text>
                    <Text>cuire quelques secondes. Bien faire chauffer la </Text>
                    <Text>poêle puis flamber au Cognac. Une fois la flamme </Text>
                    <Text>éteinte, ajouter les noix de Saint-Jacques (il ne faut </Text>
                    <Text>pas les flamber car elles perdraient leur saveur ).</Text>
                    <Text>Déguster chaud nature ou accompagné d'une </Text>
                    <Text> fondue de poireaux.</Text>
                </View>
                <Footer></Footer>
                <StatusBar style="auto" />
                </ImageBackground>
            </View>
    )
}