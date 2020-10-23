import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo'

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
    imagebackground:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    contenu: {
        //fontFamily: "Noteworthy",
        alignSelf: "center",
        fontSize: 7
    },
    conteneur: {
        flex: 2
    },
    conteneur2: {
        flex : 1
    },
      footer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
      },
  
      bg:{
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
      mainButton: {
        flexDirection: "row",
      },
      buttons1: {
        flexDirection: "row",
      },
      buttons2: {
        flexDirection: "row",
      },
      contacts: {
          //fontFamily: "Noteworthy",
          alignSelf: "center",
          fontSize: 15
      },
      image:{
          flex: 5,
          justifyContent: "center",
          alignSelf: "center",
          resizeMode: "center"
      },
      Rcontenu: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
      },
      //Restaurant accueil
      Rstcontenu: {
        flex: 2,
        alignItems: "center",
        fontSize: 6,
      },
      //Products
      Pimage:{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
      header2: {
        alignItems: "center",
        flexDirection: "row",
        alignSelf: "center",
        marginTop: "2%"
    }

      
  });

  export default styles;

