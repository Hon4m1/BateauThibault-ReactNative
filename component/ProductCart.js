import React, { Component } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image
} from "react-native";
import { addProduct, removeProduct } from '../store/actions/cartActions';
import { connect } from 'react-redux';

class ProductCart extends React.Component {
  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  isInCart(){
      let result= this.props.products.filter(value=>{
          return value.id==this.props.item.id;
      })
      return result.length>0;
  }

  render() {
    const { modalVisible } = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"a
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          style={styles.openButton}
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
        <Image source={require("../assets/poulpe.png")} style={styles.image}></Image>
          <Text style={styles.productName} >{this.props.item.name}</Text>
          <Text style={styles.price}>
              {this.isInCart()&& "OK "}
              {this.quantity}x
              {this.props.item.price} €
          </Text>
        </TouchableHighlight>
      </View>
    );
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

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default ProductCart;
