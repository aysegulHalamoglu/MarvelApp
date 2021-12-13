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
    {/* if "image_not_available" is written in url do not display image */}
    {(
         marvelImage.indexOf('image_not_available') > -1) ? 
         null 
         : 
         (
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
          )}
    </View>
   )
}
export default Card;