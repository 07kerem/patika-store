import React from "react";
import { View, TextInput, FlatList, Text, StyleSheet, Image } from "react-native";
import styles from './card.style';

function card ({news}){
    return(
        <View style={styles.container}>
        <View style={styles.row}>
            <View style={styles.card}>
                <View style={styles.top_image}>
                <Image style={styles.image} source={{uri: news.imgURL}}  />
                </View>
           
         <Text style={styles.title}> {news.title} </Text>
         <Text style={styles.price}>{news.price} </Text>
         <Text style={styles.stoc}>{news.inStock ? '' : 'stokta yok'} </Text>
            </View>
       
        </View>
         


        </View>
    )
}export default card

