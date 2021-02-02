import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import SearchComponent from './SearchComponent'



export default function Categories() {
    return (
        <View style={styles.parentContainer}>
            <SearchComponent />
        </View>
    )
}




const styles = StyleSheet.create({
    parentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
