import { StyleSheet, Text, View, StatusBar, ImageBackground, Image } from 'react-native';
import React from 'react';
import Button from '../component/Button';
import { images } from '../constants/Images';
import Footer from '../component/Footer';
import Title from '../component/Title';
import Vcard from '../component/Vcard';
import styles from '../services/Style';

export default function bateaux(props) {
    return(<View style={styles.container}>
              <ImageBackground source={require("../assets/background.png")} style={styles.Pimage}>

                <View style={styles.main}>
                  <Title title="Bateaux"></Title>
                    <View style={styles.Rcontenu}>
                        <Text style={styles.boldText}>Toutes les eaux mènent à Thibault.</Text>
                        <Vcard></Vcard>
                    </View>
                </View>
                <View style={styles.buttons}>
                    <View style={styles.buttons1}>
                        <Button text="De La Brise"
                        image={images.deLaBrise_icon.url}
                        screen={"deLaBrise"}
                        navigation={props.navigation}
                        style={styles.button}></Button>
                        <Button text="Saphir"
                        image={images.saphir_icon.url}
                        screen={"saphir"}
                        navigation={props.navigation}
                        style={styles.button}></Button>
                    </View>
                    <View style={styles.buttons1}>
                        <Button text="Gast Micher"
                        image={images.gastMicher_icon.url}
                        screen={"gastMicher"}
                        navigation={props.navigation}
                        style={styles.button}></Button>
                        <Button text="Aquilon"
                        image={images.aquilon_icon.url}
                        screen={"aquilon"}
                        navigation={props.navigation}
                        style={styles.button}></Button>
                    </View>
                    <View style={styles.buttons2}>
                        <Button text="Contact"
                        image={images.ancre.url}
                        screen={"Contact"}
                        navigation={props.navigation}
                        style={styles.button}></Button>
                        <Button text="Contact"
                        image={images.ancre.url}
                        screen={"Contact"}
                        navigation={props.navigation}
                        style={styles.button}></Button>
                    </View>
                    <Footer></Footer>
                </View>
                <StatusBar style="auto" />
                </ImageBackground>
            </View>
    )
}
