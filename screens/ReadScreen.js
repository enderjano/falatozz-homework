import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../components/config';
import { collection, getDocs, doc } from "firebase/firestore"; 
import Card from '../components/Card';
import { Button } from 'react-native-web';

const ReadScreen = () => {
    const products = [];
    const [data, setData] = useState([]);
    const test = data.map(product => {return <Card key={Math.random()} product={product}/> })
    
    

    useEffect(() => {
    getDocs(collection(db, "products")).then(docSnap => {
        docSnap.forEach((doc)=> {
            products.push({ ...doc.data() , id:doc.id})
        })});
    })

    const print = () => {
            setData(products);
            products.map(y => {console.log(y.id)})
            console.log(data)
            products.map(product => {return <Card key={Math.random()} product={product}/> })
          };


    return (
        <View>
            <Button onPress={print}></Button>
            {test}
        </View>
  )
}

export default ReadScreen;

const styles = StyleSheet.create({});