import { StyleSheet, Text, View, StatusBar,TouchableOpacity,TouchableHighlight, ImageBackground, Image, Modal, Alert } from 'react-native';
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
import styles from '../services/Style'


class Store extends React.Component {
  state = {
    modalVisible: false,
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }


  render(){
    const { modalVisible } = this.state;
    return(<View style={styles.container}>
      <ImageBackground source={require("../assets/background.png")} style={styles.Pimage}>
      <HeadStore navigation={this.props.navigation}></HeadStore>

      <View style={styles.header2}>
                    <Text > Modifiez la quantité en tapant sur chaque produit</Text>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Choisissez votre quantité :</Text>

            <TouchableOpacity>
            <Text>
            Bistrot des Gascons
            </Text>
            </TouchableOpacity>

            <TouchableOpacity >
            <Text>
            Les fous de l'île
            </Text>
            </TouchableOpacity>

            <TouchableOpacity >
            <Text>
            Bistrot landais
            </Text>
            </TouchableOpacity>

            <TouchableOpacity >
            <Text>
            Villa 9-trois
            </Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Text>
            Bistrot du Sommelier
            </Text>
            </TouchableOpacity>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                this.setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>OK</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

        <Text style={{textAlign: "center"}}> Choisissez vos produits</Text>

        <View style={{flex:1}}>
          {this.props.products.map((value,index)=>{
            return <ProductCart key={index} item={value}/>
          })}
        </View>

        <TouchableOpacity onPress={() => {
                          this.setModalVisible(!modalVisible);
                        }}>
        <Text> VALIDER </Text>
        </TouchableOpacity>
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
