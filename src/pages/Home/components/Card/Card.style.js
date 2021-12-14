import { StyleSheet, Dimensions } from "react-native"

export default StyleSheet.create({
  
      container: {
        flex:1,
      },
      image:{
        height: Dimensions.get('window').height / 4,
        justifyContent:'flex-end',
        alignItems: 'flex-start'
      },
      textButton:{
       backgroundColor: '#FFFFFF',
       lineHeight: 30,
       padding:3,
       margin: 30,
       textAlign:'center',
       fontWeight: 'bold',
       color:'black',
       fontSize:18,
      },
   
})