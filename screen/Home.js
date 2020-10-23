import { StyleSheet, Text, View, StatusBar, ImageBackground } from 'react-native';
import Button from '../component/Button';
import { images } from '../constants/Images';
import React from 'react';
import Title from '../component/Title';
import Footer from '../component/Footer';
import Json from '../services/text';
import Vcard from '../component/Vcard';
import styles from '../services/Style';

export default function Home(props) {
  return(<View style={styles.container}>
    <ImageBackground source={require("../assets/background.png")} style={styles.Pimage}>
      <View style={styles.main}>
          <Title title={Json.contact.Title}></Title>
          <View style={styles.Rcontenu}>
              <Text style={styles.boldText}>Vente en direct de notre bateau</Text>
              <Text style={styles.boldText}>Produits selon la saison, Livraison sur Paris</Text>
              <Vcard></Vcard>
          </View>
      </View>
      <View style={styles.buttons}>
          <View style={styles.mainButton}>
              <Button text="Produits et promotions"
                  image={images.poisson.url}
                  screen={"products"}
                  navigation={props.navigation}
                  style={styles.button}></Button>
          </View>
          <View style={styles.buttons1}>
              <Button text="Bateaux"
              image={images.ancre.url}
              screen={"bateaux"}
              navigation={props.navigation}
              style={styles.button}></Button>
              <Button text="Restaurants"
              image={images.restaurant.url}
              screen={"restaurants"}
              navigation={props.navigation}
              style={styles.button}></Button>
          </View>
          <View style={styles.buttons2}>
              <Button text="Recettes"
              image={images.recette.url}
              screen={"recettes"}
              navigation={props.navigation}
              style={styles.button}></Button>
              <Button text="Contact"
              image={images.tourteau.url}
              screen={"Contact"}

              navigation={props.navigation}
              style={styles.button}></Button>
          </View>
          <Footer></Footer>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  </View>
)}