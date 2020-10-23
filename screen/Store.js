import { StyleSheet, Text, View, StatusBar, ImageBackground, Image } from 'react-native';
import Button from '../component/Button';
import { images } from '../constants/Images'
import React from 'react';
import Title from '../component/Title'
import Footer from '../component/Footer'
import HeadStore from '../component/HeadStore'
import Product from '../component/Product'
import Reducer from '../store/reducer/cartReducer'
import { connect } from 'react-redux';
import styles from '../services/Style'


class Store extends React.Component {

  render(){
    return(<View style={styles.container}>
      <ImageBackground source={require("../assets/background.png")} style={styles.Pimage}>
      <HeadStore navigation={this.props.navigation}></HeadStore>
      <View style={styles.header2}>
                    <Text > Modifiez la quantité en tapant sur chaque produit</Text>
      </View>
        <View style={{flex:1}}>
          {this.props.products.map((value,index)=>{
            return <Product key={index} item={value}/>
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
