import React from "react";
import { FlatList, StatusBar } from "react-native";
//api
import { charactersURL } from "../../assets/api/marvel";
//components
import Card from "./components/Card";
//hooks
import useFetch from "../../hooks/useFetch";
//screen
import LoadingScreen from "../LoadingScreen";
import ErrorScreen from "../ErrorScreen";

const Home =({navigation})=> {
  const {error, loading,data} = useFetch(charactersURL)

 //Function to go to Details Screen
 const handleCharacterSelect =(id)=>{
  navigation.navigate('DetailsScreen' , {id})
}

   //Flatlist Details
   const renderCharacters = ({item}) => <Card item={item}  onSelect={()=> handleCharacterSelect(item.id)} />
   const flatlistKey = (item) => item.id.toString()

   if(loading){
    return <LoadingScreen/>
}

if(error){
    return  <ErrorScreen />
}

    return (
        <>
        <StatusBar  
        backgroundColor="black"
        barStyle="light-content"/> 
        <FlatList 
           keyExtractor={flatlistKey}
           data={data.results} 
           renderItem={renderCharacters}
           />
      </>
    )
}
export default Home;

