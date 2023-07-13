import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from "@expo/vector-icons"

const HomeScreen = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image
              style={styles.imageProfile}
              source={require('../images/headshot.jpg')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.centerContainer}>
          <TouchableOpacity>
            <Text style={styles.titleText}>GYMLINK</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rightContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
            {/* <Image
              style={styles.imageChat}
              source={require('../images/chat.png')}
            /> */}
            <Ionicons name='chatbubbles-sharp' size={45} color={'#7454de'}/>
          </TouchableOpacity>
        </View>
      </View>

      <Text>Home Screen</Text>
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