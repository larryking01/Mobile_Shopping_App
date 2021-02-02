import React from 'react'
import { View, StyleSheet, Text } from 'react-native'




export default function Account() {
    return (
        <View style={styles.parentContainer}>
            <Text>
               Account...
            </Text>
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
