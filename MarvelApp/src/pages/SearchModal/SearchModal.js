import React from 'react'
import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
// components
import SearchBar from "../../components/SearchBar";

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
    return (
        <View style={styles.container}> 
            
        
        </View>
    )
}
const styles = StyleSheet.create({
  
    container: {
      flex:1,
      padding:15,
      backgroundColor: '#414549',
    },
    cancel:{
      color:"red",
      fontSize: 18,
    }


})
export default SearchModal;
