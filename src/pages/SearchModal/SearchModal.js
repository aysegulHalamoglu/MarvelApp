import React , {useState} from 'react'
import { View, FlatList,StatusBar, Text,StyleSheet, TouchableOpacity } from 'react-native'
//api
import { charactersURL } from "../../assets/api/marvel";
//components
import LoadingScreen from "../LoadingScreen";
import SearchBar from "../../components/SearchBar";
import Card from "./components/Card";
//hooks
import useFetch from "../../hooks/useFetch";


const SearchModal = ({ navigation  }) => {
  const {data,loading} = useFetch(charactersURL)
  const [list, setList] = useState(data.results)
  //Function to search 
  const handleSearch =  text => {
    const  filteredList = data.results.filter(item => {
      const searchedText = text.toLowerCase(); 
      const currentText = item.name.toLowerCase();   
      return currentText.indexOf(searchedText) > -1;
    });
    setList(filteredList)
    console.log("list" , list);
  }
  
  //Function to go to Details Screen
  const handleCharacterSelect =(id)=>{
    navigation.navigate('DetailsScreen' , {id})
  }
  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      
        // Search Bar
        headerLeft: () => (
          <SearchBar onSearch={handleSearch} />
          ),
        
        // Cancel Button
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.goBack()} >
                <Text style={styles.cancel}> Cancel</Text>
            </TouchableOpacity>
          ),
        });
      }, [navigation]);
      
      if(loading){
        return <LoadingScreen/>
    }
    
    //Flatlist Details
    const renderCharacters = ({item}) => <Card item={item}  onSelect={()=> handleCharacterSelect(item.id)} />
    const flatlistKey = (item) => item.id.toString()

    //Flatlist item seperator
    const itemSeperator =() => <View style={styles.itemSeperator }/>

    return (
      <>
      <StatusBar  
      backgroundColor="black"
      barStyle="light-content"/> 
      <FlatList 
         keyExtractor={flatlistKey}
         data={data.results} 
         renderItem={renderCharacters}
         ItemSeparatorComponent={itemSeperator}
         />
    </>
  )
}
const styles = StyleSheet.create({
  
    cancel:{
      color:"red",
      fontSize: 18,
    },
    itemSeperator:{
      borderBottomColor: '#3C3F43',
      borderBottomWidth: 1,
      opacity:0.2,
    }


})
export default SearchModal;
