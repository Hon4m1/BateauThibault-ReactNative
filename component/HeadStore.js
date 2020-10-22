import { Text, TouchableOpacity, StyleSheet, Image, View } from 'react-native';
import React from 'react';


export default function HeadStore(props){
    return <View style={styles.header}>
                <TouchableOpacity style={styles.button}
                 onPress={() => props.navigation.navigate("home")}>
                <Image source={require("../assets/icons/homeLogo.png")} style={styles.image}></Image>
            </TouchableOpacity>
                <Text style={styles.text}>Le Bateau de Thibault</Text>
                <TouchableOpacity style={styles.button}
                 onPress={() => props.navigation.navigate("store")}>
                <Image source={require("../assets/icons/homeLogo.png")} style={styles.image}></Image>
            </TouchableOpacity>
            </View>
}
const styles = StyleSheet.create({
    text: {
        marginLeft: 30,
        marginRight: 30,
        color: "white",
    },
    image: {
        width: 60,
        height: 60,
    },
    header: {
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "black",
        
    }
});