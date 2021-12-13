import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableWithoutFeedback
} from 'react-native';
// style
import styles from './Card.style'

const Card = (props) => {
  const marvelImage = `${props.item.thumbnail.path}.${props.item.thumbnail.extension}`
  return(
    <View style={styles.container}>  

        <TouchableWithoutFeedback >
         <ImageBackground 
        style={styles.image} 
        source={{uri: marvelImage }}
       >
            <Text  
            style={styles.textButton}>
            {props.item.name}
            </Text>
          </ImageBackground>
          </TouchableWithoutFeedback>
        
    </View>
   )
}
export default Card;