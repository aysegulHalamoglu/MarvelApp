import React from 'react'
import { NavigationContext } from '@react-navigation/native';
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchIcon=(props)=> {
    const navigation = React.useContext(NavigationContext);

  //Function to go to Search Modal Screen
    const handleSearchSelect =(name) => {
        navigation.navigate('SearchModal' , {name})
      }
    return (
        <View>
            <Icon name="search" size={props.size} color={props.color} onPress={props.onPress} />
        </View>
    )
}

export default SearchIcon;