import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SearchIcon() {
    const searchIcon = <Icon name="search" size={30} color="#900" />;
    return (
        <View>
           {searchIcon}
        </View>
    )
}
