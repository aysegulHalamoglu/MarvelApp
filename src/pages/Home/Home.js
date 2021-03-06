import React from "react";
import { FlatList, StatusBar } from "react-native";
//api
import { charactersURL } from "../../assets/api/marvel";
//components
import Card from "./components/Card";
import SearchIcon from "../../components/SearchIcon";
//hooks
import useFetch from "../../hooks/useFetch";
//screen
import LoadingScreen from "../LoadingScreen";
import ErrorScreen from "../ErrorScreen";

const Home =({navigation})=> {
  const {error, loading,data} = useFetch(charactersURL)
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <SearchIcon color={'#d11a06'} size={25} onPress={handleSearchSelect}/>
      ),
    });
  }, [navigation]);
 //Function to go to Details Screen
 const handleCharacterSelect =(id)=>{
  navigation.navigate('DetailsScreen' , {id})
}
 //Function to go to Search Screen
 const handleSearchSelect =()=>{
  navigation.navigate('SearchModal' )
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
        {/* <FlatList 
           keyExtractor={flatlistKey}
           data={data.results} 
           renderItem={renderCharacters}
           /> */}
      </>
    )
}
export default Home;

