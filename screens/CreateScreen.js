import {KeyboardAvoidingView, StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, getDoc, getDocs, where, query } from "firebase/firestore"; 
import { db } from '../components/config';



const CreateScreen = () => {
  const [name, setName] = useState(''); 
  const [description, setDescription] = useState(''); 
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');  

  const addProduct = () => {
    if (!name.trim() || !description.trim() || !amount.trim()) {
      alert('Please Fill The Missing Fields!');
      return;
    }
    else {
      addDoc(collection(db, "products"), {     
            name: name,
            description: description,
            amount: amount,
          }).then(() => { 
            setMessage("Submitted");  

          }).catch((error) => {
                console.log(error);
          });
      }
    }

  return (
    <KeyboardAvoidingView 
    style={styles.container}
    behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
        onChangeText={(name) => {setName(name)}}
          placeholder="Name"
          style={styles.input}
        />
        <TextInput
          onChangeText={(description) => {setDescription(description)}}
          placeholder="Description"
          style={styles.input}
        />
        <TextInput
          onChangeText={(amount) => {setAmount(amount)}}
          placeholder="Amount"
          style={styles.input}
        />

      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={addProduct}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <View>
          {message ? <Text>{message}</Text>: ""}
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default CreateScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      width: '80%'
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10},
      buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
      },
      button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
      },
      buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782F9',
        borderWidth: 2,
      },
      buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
      },
      buttonOutlineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16,
      },
    })

