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
    id: 123,
  },
  {
    firstName: "Nathan",
    lastName: "Glen",
    fitnessLevel: "Elite",
    photoURL: "images\\Pic_nathan.jpg",
    age: 19,
    id: 456,
  },
  {
    firstName: "Sophia",
    lastName: "Iaconis",
    fitnessLevel: "Intermediate",
    photoURL: "images\\Pic_soph.jpg",
    age: 19,
    id: 789,
  },
]


const HomeScreen = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={flex=1}>
      <View style={styles.cardStyle}>
        <Swiper 
          style={styles.cardContainer}
          cards={TEST_DATA}
          renderCard={(card) => (
            <View key={card.id} style={styles.card}>
              <Text>{card.firstName}</Text>
            </View>        
          )}      
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  cardStyle: {
    flex: 1,
    marginTop: -10,
  },
  cardContainer: {
    backgroundColor: "red",
  },
  card: {
    backgroundColor: "#7454de",
    height: 75,
    borderRadius: 20,
  }
});