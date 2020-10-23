import { Text, View, StatusBar, ImageBackground, Image } from 'react-native';
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
                  <Title title="Homard en chaud-Froid"></Title>

                    <Image
                    style={styles.image}
                    source = {Json.recipes.homard.img}/>
                </View>
                <View style={styles.Rcontenu}>
                    <Text>Faites cuire les homards dans de l'eau bouillante</Text>
                    <Text>avec du thym, du laurier, du sel, du poivre</Text>
                    <Text>de Cayenne. Laissez cuire 20 minutes. Egouttez</Text>
                    <Text>les et laissez les refroidir</Text>
                    <Text>Découpez les coffres des homards dans le sens</Text>
                    <Text>de la longueur</Text>
                    <Text>Mélangez la mayonnaise avec le cognac, le corail</Text>
                    <Text>et la ciboulette ciselée</Text>

                </View>
                <Footer></Footer>
                <StatusBar style="auto" />
                </ImageBackground>
            </View>
    )
}
