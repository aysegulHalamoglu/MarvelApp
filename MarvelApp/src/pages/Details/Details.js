import React from "react";
import { View, Text, ImageBackground, FlatList, StatusBar } from "react-native";
import { characterBeforeIdURL, characterAfterIdURL} from "../../assets/api/marvel";
// hooks
import useFetch from "../../hooks/useFetch";
// pages
import LoadingScreen from "../LoadingScreen";

// style
import styles from "./Details.style"

const Details =({route})=> {
  const {id} = route.params;
  const characterURL= `${characterBeforeIdURL}${id}${characterAfterIdURL}`;
  const {loading,data} = useFetch(characterURL)



  const renderList = () =>   (
    <ImageBackground 
    style={styles.container} 
    source={{ uri: `${data.results[0].thumbnail.path}.${data.results[0].thumbnail.extension}`}}
    blurRadius={50}
    >
   <ImageBackground style={styles.image_body} source={{ uri: `${data.results[0].thumbnail.path}.${data.results[0].thumbnail.extension}` }}>
   </ImageBackground>
 <View style={styles.info_container}>
   
   <View>
           <Text style={styles.headers} >NAME  </Text>
           <Text style={styles.fonts}>{data.results[0].name}</Text>
   </View>

   <View>
           <Text style={styles.headers}>DESCRIPTION  </Text>
   </View>

   <View>
           <Text style={styles.headers}>COMICS</Text>
      
        
   </View>

   <View>
           <Text style={styles.headers}>SERIES</Text>
          
   </View>
   
   <View>
           <Text style={styles.headers}>EVENTS</Text>
        
   </View>

   <View>
           <Text style={styles.headers}>STORIES</Text>
       
   </View>

   <View>
           <Text style={styles.headers}>RELATED LINKS</Text>

         <View>
           <Text style={styles.relatedLinks}>Detail</Text>
           <Text style={styles.relatedLinks}>Wiki</Text>
           <Text style={styles.relatedLinks}>Comiclink</Text>
         </View>
   </View>


 </View>
</ImageBackground>
)

const flatlistKey = (item) => item.id.toString()
  
if(loading){
  return <LoadingScreen/>
}
    return (
    <>
    <StatusBar  backgroundColor="black"
        barStyle="light-content"/>
      <FlatList 
      keyExtractor={flatlistKey}
      data={data.results} 
      renderItem={renderList}
      />

    </>
    )
}


export default Details;