import React from 'react'
import { View,Text, StyleSheet, Image } from 'react-native'
// assets
import spiderMan from '../assets/img/Spider_Man_Upside_Down.png'

const ErrorScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={spiderMan} style={styles.logo} /> 
            <Text  style={styles.text}> Ups...Something went wrong! </Text>
        </View>
    )
}
const styles = StyleSheet.create({
  
    container: {
      flex:1,
      backgroundColor: '#0CD5F7',
      justifyContent:'flex-start',
      alignItems:'center'
    },
    logo:{
        width:120,
        height:220,
    },
    text:{
        marginTop:100,
        fontWeight: 'bold',
        fontSize:18,
    },
 
})
export default ErrorScreen;
