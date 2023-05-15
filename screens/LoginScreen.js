import React, { useState } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [inputFocused, setInputFocused] = useState(false);

  const formatPhoneNumber = (number) => {
    const formatted = number.replace(/\D/g, '').substring(0, 10);
    let formattedPhoneNumber = '';
  
    if (formatted.length > 6) {
      formattedPhoneNumber = `${formatted.slice(0, 3)}-${formatted.slice(3, 6)}-${formatted.slice(6)}`;
    } else if (formatted.length > 3) {
      formattedPhoneNumber = `${formatted.slice(0, 3)}-${formatted.slice(3)}`;
    } else if (formatted.length > 0) {
      formattedPhoneNumber = formatted;
    }
  
    return formattedPhoneNumber;
  };  
  
  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <View style={styles.title}>
        <Text style={styles.titleText}>GYMLINK</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          maxLength={12}
          textAlign='center'
          placeholder={inputFocused ? 'XXX-XXX-XXXX' : 'Phone Number'}
          fontFamily='Avenir-Heavy'
          fontSize={19}
          value={formatPhoneNumber(phoneNumber)}
          onChangeText={setPhoneNumber}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
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