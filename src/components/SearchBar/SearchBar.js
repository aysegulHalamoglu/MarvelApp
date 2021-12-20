import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
// components
import SearchIcon from '../SearchIcon'

const SearchBar = (props) => {
   
    return (
        <View style={styles.container}>
            <SearchIcon 
                style={styles.searchIcon} 
                size={17} 
                color={"lightgray"}/>
            <TextInput 
                style={styles.searchBar} 
                placeholder="Search..." 
                placeholderTextColor='#cecaca'
                onChangeText={props.onSearch}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '73%',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:"white",
        padding: 4,
        paddingHorizontal: 18,
        borderRadius: 5,
    },
    searchBar: {
        flex:1,
        padding:0,
        marginLeft:10,
        fontSize: 17,
        fontWeight: 'bold',
    }
    
})
export default SearchBar

