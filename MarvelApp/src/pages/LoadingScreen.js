import React from 'react'
import { View,StyleSheet, Image } from 'react-native'
// assets
import blueLogo from '../assets/img/Marvel_Blue_Logo.png'
const LoadingScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={blueLogo} style={styles.logo} /> 
        </View>
    )
}
const styles = StyleSheet.create({
  
    container: {
      flex:1,
      backgroundColor: '#0CD5F7',
      justifyContent:'center',
      alignItems:'center'
    },
    logo:{
        justifyContent:'center',
        alignItems: 'center'
    },
 
})
export default LoadingScreen;
