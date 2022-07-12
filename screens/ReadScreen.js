import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../components/config';
import { collection, getDocs, doc } from "firebase/firestore"; 
import Card from '../components/Card';
import { Button } from 'react-native-web';

const ReadScreen = () => {
    const products = [];
    const [data, setData] = useState(false);
    

    useEffect(() => {
    getDocs(collection(db, "products")).then(docSnap => {
        docSnap.forEach((doc)=> {
            products.push({ ...doc.data() })
        })});
    })

    const print = () => {
            setData(!data);
            console.log(products);
          };


    return (
        <View>
            <Button onPress={print}></Button>
            {data && <FlatList data={products} renderItem={(element) => {console.log(element)}}></FlatList>}
        </View>
  )
}

export default ReadScreen;

const styles = StyleSheet.create({});