import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Swiper from 'react-native-deck-swiper'

const TEST_DATA = [
  {
    firstName: "Alexander",
    lastName: "Klein",
    fitnessLevel: "Advanced",
    photoURL: "images\\jacked.jpg",
    age: 18,
  },
  {
    firstName: "Nathan",
    lastName: "Glen",
    fitnessLevel: "Elite",
    photoURL: "images\\Pic_nathan.jpg",
    age: 19,
  },
  {
    firstName: "Sophia",
    lastName: "Iaconis",
    fitnessLevel: "Intermediate",
    photoURL: "images\\Pic_soph.jpg",
    age: 19,
  },
]


const HomeScreen = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <View>
        <Swiper 
          cards={TEST_DATA}
          renderCard={(card) => {
            <View>
              <Text>{card.firstName}</Text>
            </View>        
          }}      
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 10,
  },
  leftContainer: {
    padding: 2,
  },
  centerContainer: {
    padding: 5,
    alignItems: 'center',
  },
  rightContainer: {
    padding: 2,
  },
  imageProfile: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  imageChat:{
    height: 45,
    width: 45,
  },
  titleText: {
    fontSize: 40,
    fontFamily: 'AvenirNextCondensed-Bold',
    color: '#7454de',
  },
});