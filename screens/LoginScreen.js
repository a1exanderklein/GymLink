import React from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const LoginScreen = () => {
  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior='padding'
    >
      <View style={styles.title}>
        <Text style={styles.titleText}>GYMLINK</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
            maxLength={10}
            textAlign= 'center'
            placeholder='Phone Number'
            fontFamily= 'Avenir-Heavy'
            fontSize= '19'
            // value={ }
            // onChangeText={text => }
            style={styles.input}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
            onPress={() => {}}
            style={[styles.button, styles.buttonOutline]}
        >
            <Text style={styles.buttonText}>Send Verification Code</Text>
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
      marginBottom: 20,
    },
    titleText: {
      fontSize: 70,
      fontFamily: 'AvenirNextCondensed-Bold',
      color: '#ffffff'
    },
    inputContainer: {
      //Phone number input box
      width: '70%',
    },
    input: {
      //Spacing and color for Phone Number
      backgroundColor: 'white',
      paddingHorizontal: 30,
      paddingVertical: 20,
      borderRadius: 20,
    },
    buttonContainer:{
      //Container of Verification Button
      width: '70%',
      justifyContent: 'center',
      alignItems: 'center', 
      marginTop: 10
    },
    button:{
        backgroundColor: 'white',
        width: '100%',
        padding: 15,
        borderRadius: 20,
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
      borderWidth: 2
    },
})