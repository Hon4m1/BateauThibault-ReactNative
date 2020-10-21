import { StyleSheet, Text, View, StatusBar, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { images } from '../constants/Images'
import React from 'react';

import { addProduct, removeProduct } from '../store/actions/cartActions';
import { connect } from 'react-redux';

class Product extends React.Component{

    isInCart(){
        let result= this.props.products.filter(value=>{
            return value.name==this.props.item.name;
        })
        return result.length>0;
    }


    render(){
    return <TouchableOpacity style={StyleSheet.container}
    onPress={() =>{
        if(!this.isInCart()){
            this.props.addProduct(this.props.item);
            console.log(this.props.item);
        }else{
            this.props.removeProduct(this.props.item);
        }
    }}>
        <Image source={images.poulpe.url}></Image>
        <Text style={{marginVertical:10, textAlign:"center"}}>{this.props.item.name}</Text>
        <Text>
            {this.isInCart()&& "OK "}
            {this.props.item.price}
        </Text>
</TouchableOpacity>
}
}

const mapStateToProps = state => {
    return {
        products: state.cart.products
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addProduct: data => {dispatch(addProduct(data));},
        removeProduct: data => {dispatch(removeProduct(data));},
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
