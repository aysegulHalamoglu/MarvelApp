import { StyleSheet, Dimensions } from "react-native"

export default StyleSheet.create({
    body: {
        flex:1
    },
    container:{
        flex:1,
      },
      info_container:{
       height: Dimensions.get('window').height / 1,
      padding:10,
      },
    image_body: {
       height: Dimensions.get('window').height / 2.6,
      },
      headers:{
        color:'red',
        fontWeight:'bold',
        fontSize:13,
      },
      fonts:{
        color:'white',
        fontSize:15,
        padding:7,
      },
      relatedLinks:{
        color:'white',
        fontSize:18,
        padding:5
      },
   
})