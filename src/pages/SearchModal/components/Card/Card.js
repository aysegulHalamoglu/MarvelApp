import React from 'react';
import {
  View,
  Text,
  Image,
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
      <View
        style={styles.inner_container}
        onPress={props.onSelect} >

          <Image
          style={styles.image} 
          source={{uri: marvelImage }}/>
  
          <Text  
            style={styles.textButton}
            onPress={props.onSelect}>
            {props.item.name}
          </Text>

      </View>
        )}
    </View>
   )
}
export default Card;