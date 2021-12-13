import React from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';

// hooks
import useFetch from "../../../../hooks/useFetch";
// style
import styles from './ScrollList.style'
// components
import Loading from "../../../../components/Loading"

const ScrollList = ({ url }) => {
  const { loading, data} = useFetch(url)
 
  if(loading){
    return <Loading />
}

  return(
    <View style={styles.container}>  
     
     <ScrollView horizontal>
     {data.results.map((items) =>  
     
     <TouchableOpacity key={items.id} style={styles.inner_container}
     onPress={() => null }
     >
       
         {(`${items.thumbnail.path}.${items.thumbnail.extension}`.indexOf('image_not_available') > -1) ? 
          <Image 
          style={styles.noImage}
          source = {{uri :  `${items.thumbnail.path}.${items.thumbnail.extension}`}}
          onError={({ nativeEvent: {error} }) => console.log(error)} />
         : <Image 
         style={styles.image}
         source = {{uri :  `${items.thumbnail.path}.${items.thumbnail.extension}`}}
         onError={({ nativeEvent: {error} }) => console.log(error)} /> }
        
      
        <Text style={styles.text}> {items.title} </Text>
    
      </TouchableOpacity> 
      
      )}
     </ScrollView>

    </View>
   )
}
export default ScrollList;
