import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Firebase_Auth } from '../firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const auth = Firebase_Auth

  const navigation = useNavigation()

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(user => {
  //     if (user) {
  //       navigation.navigate("Home")
  //     }
  //   })
  //   return unsubscribe
  // }, [])

  const handleSignUp = async () => {
    setLoading(true)
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password)
      console.log("Registration Successful")
      console.log("User Email: " + email)
      alert("Successfully Registered \nYou may now Login")
    } catch (error) {
      console.log(error)
      alert("Registration Failed: " + error.message)
    } finally {
      setLoading(false)
    }
  }

  const handleSignIn = async () => {
    setLoading(true)
    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
      console.log("Sign In Successful")
      console.log("User Email: " + email)
      navigation.navigate("Home")
    } catch (error) {
      console.log(error)
      alert("Sign In Failed: " + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <View style={styles.title}>
        <Text style={styles.titleText}>GYMLINK</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          textAlign='center'
          placeholder={'Email Address'}
          fontFamily='Avenir-Heavy'
          fontSize={19}
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
          marginBottom = {10}
        />
        <TextInput
          maxLength={12}
          textAlign='center'
          placeholder={'Password'}
          fontFamily='Avenir-Heavy'
          fontSize={19}
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity
            onPress={handleSignIn}
            style={[styles.button, styles.buttonOutline]}
        >
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={handleSignUp}
            style={[styles.button]}
        >
            <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        //background screen
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7454de'
    },
    title: {
      //'GYMLINK'
      textAlign: 'center',
      marginBottom: 30,
    },
    titleText: {
      fontSize: 80,
      fontFamily: 'AvenirNextCondensed-Bold',
      color: '#ffffff'
    },
    inputContainer: {
      //Email & Password input box
      width: '70%',
      marginBottom: 20,
    },
    input: {
      //Spacing and color for Inputs
      backgroundColor: 'white',
      paddingHorizontal: 10,
      paddingVertical: 20,
      borderRadius: 20,
    },
    buttonContainer:{
      //Container of Verification Button
      width: '70%',
      justifyContent: 'center',
      alignItems: 'center', 
      paddingTop: 10,
      paddingBottom: 10,
    },
    button:{
        backgroundColor: 'white',
        width: '100%',
        padding: 15,
        borderRadius: 20,
        marginBottom: 10,
    },
    buttonText:{
      //'Send Verification Code'
      textAlign: 'center',
      color: '#ffffff',
      fontFamily: 'Avenir-Heavy',
      fontSize: 20
    },
    buttonOutline: {
      backgroundColor: '#7454de',
      marginTop: 2,
      borderColor: 'white',
      borderWidth: 3
    },
    buttonOutlineText:{
      //'Send Verification Code'
      textAlign: 'center',
      color: '#7454de',
      fontFamily: 'Avenir-Heavy',
      fontSize: 20
    },
})