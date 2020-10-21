import React from 'react'
import { StyleSheet, View, Text, ImageBackground} from 'react-native';
import Product from '../component/Product';

export default class ProductsList extends React.Component {
  render(){
    let products = this.props.route.params.data ? this.props.route.params.data : [];
    
    return <View>
       <Text title="Le bateau de Thibault"></Text>
      <Text style={{marginVertical:10, textAlign: "center"}}> Choisissez vos produits</Text>
      <View style={{flex:1}}>
        {products.map((value,index)=>{
          return <Product key={index} item={value}/>
        })}
      </View>
      </View>
  }
}
