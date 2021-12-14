import { StyleSheet, Dimensions } from "react-native"

export default StyleSheet.create({
  
      container: {
      },
      inner_container:{
        padding:2,
      },
      image:{
        height: Dimensions.get('window').height / 4,
        width: Dimensions.get('window').width / 3,
        resizeMode: 'cover'
      },
      noImage:{
        height: Dimensions.get('window').height / 4,
        width: Dimensions.get('window').width / 3,
        resizeMode: 'stretch',
      },
      text:{
        width: Dimensions.get('window').width / 3,
        textAlign:'center',
        color:'white',
        fontSize:12,
        
      }
  
   
})