import React from 'react'
import { View, FlatList, Text,StyleSheet, TouchableOpacity } from 'react-native'
//api
import { charactersURL } from "../../assets/api/marvel";
//components
import SearchBar from "../../components/SearchBar";
import Card from "./components/Card";
//hooks
import useFetch from "../../hooks/useFetch";


const SearchModal = ({ navigation }) => {
  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      
        // Search Bar
        headerLeft: () => (
          <SearchBar />
          ),
        
        // Cancel Button
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.goBack()} >
                <Text style={styles.cancel}> Cancel</Text>
            </TouchableOpacity>
          ),
        });
      }, [navigation]);
      
      
    //Function to go to Details Screen
    const handleCharacterSelect =(id)=>{
      navigation.navigate('DetailsScreen' , {id})
    }
    
    //Flatlist Details
    const {data} = useFetch(charactersURL)
    const renderCharacters = ({item}) => <Card item={item}  onSelect={()=> handleCharacterSelect(item.id)} />
    const flatlistKey = (item) => item.id.toString()

    //Flatlist item seperator
    const itemSeperator =() => {
     return(
      <View
      style={{
        borderBottomColor: '#3C3F43',
        borderBottomWidth: 1,
        opacity:0.2,
      }}
    />
     )
    }

    return (
        <View style={styles.container}> 
        <FlatList 
           keyExtractor={flatlistKey}
           data={data.results} 
           renderItem={renderCharacters}
           ItemSeparatorComponent={itemSeperator}
           />
        
        </View>
    )
}
const styles = StyleSheet.create({
  
    container: {
      flex:1,
      backgroundColor: '#3C3F43',
    },
    cancel:{
      color:"red",
      fontSize: 18,
    }


})
export default SearchModal;
