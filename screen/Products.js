import { StyleSheet, Text, View, StatusBar, ImageBackground, Image } from 'react-native';
import React from 'react';
import Button from '../component/Button';
import { images } from '../constants/Images';


export default function products(props) {
    return(<View style={styles.container}>
              <ImageBackground source={require("../assets/background.png")} style={styles.image}>

                <View style={styles.main}>
                    <View style={styles.title}>
                        <Text style={styles.titleContent}>Le bateau de Thibault</Text>
                    </View>
                    <View style={styles.contenu}>
                        <Text style={styles.boldText}>Vente en direct de notre bateau</Text>
                        <Text style={styles.boldText}>Produits selon la saison, Livraison sur Paris</Text>
                        <Text>06.63.99.99.78</Text>
                        <Text>lebateaudethibault@gmail.com</Text>
                        <Text>www.facebook.com/lebateaudethibault</Text>
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
                    
                </View>
                <View style={styles.footer}>
                    <Text>Powered by BTK Inc.</Text>
                </View>
                <StatusBar style="auto" />
                </ImageBackground>
            </View>
    )
}

/*export default class Products extends ReactComponent {
    
    state = {
        data: []
    }
    
    
    
    render(){
    return(
        <View style="container">
            <Header navigation={this.props.navigation}>
            <Text style={{marginVertical:10, textAlign:"center"}}>Choississez</Text> 
            </Header>
            <View style={{flex:1}}>
                <Button text="Poissons"
                image={images.poulpe.url}
                screen={"ProductList"}
                navigation={this.prpos.navigation}
                data={this.state.data.filter(value=>value.category==0)}></Button>
            </View>
        </View>
    )
}
}
*/

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    main: {
      flex: 5
    },
    buttons: {
      flex: 4,
    },
    footer: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center"
    },

    image:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    title: {
      flex: 1,
      alignSelf: "center",
      marginTop: 50,
    },
    titleContent: {
        fontStyle: 'italic',
        fontSize: 25,
        color: 'white'
    },
    boldText: {
        fontWeight: "bold"
    },
    contenu: {
      flex: 2,
      alignItems: "center",
      fontSize: 7,
    },

    mainButton: {
      flexDirection: "row",
    },
    buttons1: {
      flexDirection: "row",
    },
    buttons2: {
      flexDirection: "row",
    }
  });