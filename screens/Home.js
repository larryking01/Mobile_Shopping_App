import React, { useEffect, useState } from 'react'
import { projectFireStore } from '../firebase/firebaseSetup'
import { View, StyleSheet, Text, FlatList, Image, TouchableOpacity, Alert } from 'react-native'
import SearchComponent from './SearchComponent'


export default function Home() {

    // the array to hold the image links
    const [imageLinkArray, setImageLinkArray] = useState([])

    // the state to hold the id of the selected product.
    const [ selectedProductID, setSelectedProductID ] = useState()
    

    // fetching all data from the firestore collection and displaying them 
    useEffect(() => {
        projectFireStore.collection('Products').orderBy('productName').onSnapshot(snap => {
            let temporaryArray = []
            snap.forEach(document => {
                temporaryArray.push({ id: document.id, ...document.data()})
            })
            setImageLinkArray(temporaryArray)
        })
        imageLinkArray.forEach(product => console.log(product.imageLink))
    }, [])



    //function to add items selected to the cart.
    const addToCart = ( event ) => {
        Alert.alert('Like it?', 'Then add it to your cart !!', 
        [ 
            {
                text: 'Add',
                onPress: () => {},
                style:'default'
            },
            {
                text: 'Later',
                onPress: () => {},
                style: 'default'
            }
        ]
        )

        console.log(event)

    }



    return (
        <View style={styles.parentContainer}>
             <SearchComponent />

            <View style={styles.encloseFlatList}>
             <FlatList 
                numColumns={3}
                data={imageLinkArray}
                renderItem={({ item, index }) => (
                  <TouchableOpacity onPress={ addToCart }>
                  <View style={styles.productImageWrapper}> 
                    <Image style={styles.productImages}
                           source={{
                               uri: item.imageLink
                           }}
                           key={index}
                    />
                    <Text style={styles.productNameText}> { item.productName } </Text>
                    </View>
                    </TouchableOpacity>
                )}
                
             />
            </View>

        </View>
    )
}




const styles = StyleSheet.create({
    parentContainer: {
        flex: 1
    },
    encloseFlatList: {
        flex: 1,
        position: 'relative',
        top: 80
    },
    productImages: {
        width: 110,
        height: 160, 
        position: 'relative', 
        top: 30
    },
    productImageWrapper: {
        height: 200,
        width: 115,
        marginLeft: 5,
        elevation: 4,
        paddingBottom: 20
    },
    productNameText: {
        position: 'relative',
        top: 30
    }
})
