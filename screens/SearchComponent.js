import React from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native'
import Ionicon from 'react-native-vector-icons/Ionicons'


export default function SearchComponent() {
    return (
        <View style={styles.searchContainer}>
            <TextInput style={ styles.textInput} placeholder='Search on jumia' />
            <Ionicon style={styles.cartIcon} name='cart-outline' size={30} color='white' />
            <Ionicon style={styles.searchIcon} name='search-outline' size={23} color='black' />
        </View>
    )
}



const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: 'black',
        height: 90,
        position: 'absolute',
        top:0,
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    textInput: {
        height: 40,
        borderColor: 'white',
        borderWidth: 2,
        position: 'relative',
        top: 40,
        width: 270,
        right: 30,
        borderRadius: 7,
        paddingLeft: 37,
        fontSize: 17,
        backgroundColor: 'white',
        color: 'black'
    },
    cartIcon: {
        position: 'relative',
        left: 140,
        bottom: -5
    },
    searchIcon: {
        position: 'relative',
        bottom: 28,
        right: 147
    }
})
