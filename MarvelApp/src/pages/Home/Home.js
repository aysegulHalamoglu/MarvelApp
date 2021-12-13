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
//import ErrorScreen from "./ErrorScreen";
const Home =()=> {
  const {loading,data} = useFetch(charactersURL)
   //Flatlist Details
   const renderCharacters = ({item}) => <Card item={item} />
   const flatlistKey = (item) => item.id.toString()

   if(loading){
    return <LoadingScreen/>
}

// if(error){
//     return  <ErrorScreen/>
// }

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

