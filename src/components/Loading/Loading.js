import React from 'react'
import { ActivityIndicator, View } from 'react-native'
// style
import styles from './Loading.style'

const Loading = () => {
    return (
        <View style={styles.container}>
          <ActivityIndicator size={'large'}/>
        </View>
    )
}

export default Loading;
