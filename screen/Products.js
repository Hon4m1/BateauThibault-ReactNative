import React from 'react';
import Button from '../component/Button';
import { images } from '../constants/Images';
import Title from '../component/Title';
import Footer from '../component/Footer';
import  { getRessources }  from '../services/apirest'
import HeadStore from '../component/HeadStore'
import { StyleSheet, Text, View, StatusBar, ImageBackground, Image, ReactComponent, Header } from 'react-native';

export default class Products extends React.Component {

    state = {
        data: []
    }

    componentDidMount(){
      getRessources("products").then(response=>{
        this.setState({data:response})
      })
    }

    render(){
      return(
          
          
          <View style={styles.container}>
             <ImageBackground source={require("../assets/background.png")} style={styles.image}>
            <HeadStore navigation={this.props.navigation}></HeadStore>
               <View style={{flex:1}}>
                  <Button text="Poissons"
                  image={images.poulpe.url}
                  screen={"productsList"}
                  navigation={this.props.navigation}
                  data={this.state.data.filter(value=>value.category==0)}></Button>
                  <Button text="Coquillages"
                  image={images.poulpe.url}
                  screen={"productsList"}
                  navigation={this.props.navigation}
                  data={this.state.data.filter(value=>value.category==1)}></Button>
                  <Button text="Crustacés"
                  image={images.poulpe.url}
                  screen={"productsList"}
                  navigation={this.props.navigation}
                  data={this.state.data.filter(value=>value.category==2)}></Button>
                  <Button text="Promotion"
                  image={images.poulpe.url}
                  screen={"productsList"}
                  navigation={this.props.navigation}
                  data={this.state.data.filter(value=>value.discount!=0)}></Button>
              </View>
              </ImageBackground>
          </View>
      )
  }
}


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
  });
