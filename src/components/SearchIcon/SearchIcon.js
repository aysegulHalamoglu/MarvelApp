import React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchIcon=(props)=> {
    return (
        <View>
            <Icon name="search" size={props.size} color={props.color} onPress={props.onPress} />
        </View>
    )
}

export default SearchIcon;