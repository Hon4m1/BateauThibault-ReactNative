import { StyleSheet, Text, View, StatusBar, ImageBackground, Image } from 'react-native';
import Button from '../component/Button';
import { images } from '../constants/Images'
import React from 'react';
import Title from '../component/Title'
import Footer from '../component/Footer'
import HeadStore from '../component/HeadStore'
import Product from '../component/Product'
import ProductCart from '../component/ProductCart'
import Reducer from '../store/reducer/cartReducer'
import { connect } from 'react-redux';


class Store extends React.Component {

  render(){
    return(<View style={styles.container}>
      <ImageBackground source={require("../assets/background.png")} style={styles.image}>
      <HeadStore navigation={this.props.navigation}></HeadStore>
        <Text style={{textAlign: "center"}}> Choisissez vos produits</Text>
        <View style={{flex:1}}>
          {this.props.products.map((value,index)=>{
            return <ProductCart key={index} item={value}/>
          })}
        </View>
      </ImageBackground>
    </View>
    )
}

}

const mapStateToProps = state => {
  return {
      products: state.cart.products
  }
};

export default connect(mapStateToProps)(Store);

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
    image:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
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
