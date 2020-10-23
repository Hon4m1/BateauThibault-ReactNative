import React from 'react'
import { StyleSheet, View, Text, ImageBackground} from 'react-native';
import Product from '../component/Product';
import HeadStore from '../component/HeadStore';
import styles from '../services/Style'

export default class ProductsList extends React.Component {
  render(){
    let products = this.props.route.params.data ? this.props.route.params.data : [];
    
    return <View style={styles.container}>
            <ImageBackground source={require("../assets/background.png")} style={styles.Pimage}>
            <HeadStore navigation={this.props.navigation}></HeadStore>
            <View style={styles.header2}>
                    <Text> Choisissez vos produits</Text>
            </View>
              <View style={{flex:1}}>
                {products.map((value,index)=>{
                  return <Product key={index} item={value}/>
                })}
              </View>
            </ImageBackground>
          </View>
  }
}