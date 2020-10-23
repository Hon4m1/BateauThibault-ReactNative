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
// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//     },
//    main: {
//       flex: 5
//     },
//     buttons: {
//       flex: 4,
//     },

//     footer: {
//       flex: 3,
//       marginLeft: 10,
//       marginRight: 10,
//       marginTop: 10,
//       alignItems: "center"
//     },

//     subfooter: {
//       flex: 1,
//       justifyContent: "flex-end",
//       alignItems: "center"
//     },

//     imagebackground:{
//         flex: 1,
//         resizeMode: "cover",
//         justifyContent: "center"
//     },
//     title: {
//       flex: 1,
//       alignSelf: "center",
//       marginTop: 50,
//     },
//     titleContent: {
//         fontStyle: 'italic',
//         fontSize: 25,
//         color: 'white'
//     },
//     boldText: {
//         fontWeight: "bold"
//     },

//     image:{
//         flex: 5,
//         marginTop: 50,
//         justifyContent: "center",
//         alignSelf: "center",
//         resizeMode: "contain"
//     },
//     contenu: {
//       flex: 2,
//       alignItems: "center",
//       fontSize: 7,
//     },
//   });
