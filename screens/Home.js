import React, { useEffect, useState } from 'react'
import { projectFireStore } from '../firebase/firebaseSetup'
import { View, StyleSheet, Text, FlatList, Image } from 'react-native'
import SearchComponent from './SearchComponent'
let phone = require('../static files/s6edge.jpg')



export default function Home() {

    const [imageLinkArray, setImageLinkArray] = useState([])
    let imageLink = 'https://images.samsung.com/is/image/samsung/ph-galaxy-s6-g920-sm-g920fzkuxtc-001-front-black'

    // fetching all data from the firestore collection
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



    return (
        <View style={styles.parentContainer}>
             <SearchComponent />

            <View style={styles.encloseFlatList}>
             <FlatList 
                numColumns={3}
                data={imageLinkArray}
                renderItem={({ item, index }) => (
                  <View style={styles.productImageWrapper}> 
                    <Image style={styles.productImages}
                           source={{
                               uri: item.imageLink
                           }}
                           key={index}
                    />
                    <Text> { item.productName } </Text>
                    </View>
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
        width: 100,
        height: 150, 
        position: 'relative', 
        top: 30
    },
    productImageWrapper: {
        height: 170,
        width: 120,
        marginLeft: 5,
        elevation: 2
    }
})
