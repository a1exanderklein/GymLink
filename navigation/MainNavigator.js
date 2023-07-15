import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ChatScreen from '../screens/ChatScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Entypo } from "@expo/vector-icons"

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
    <Tab.Navigator 
    initialRouteName='Link'
    screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#7454de',
        tabBarInactiveTintColor: 'grey',
        tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: 'Avenir-Heavy',
        },
        tabBarStyle: {
          height: 100, // Increase the height of the bottom bar
        },
        tabBarIconStyle: {
          marginTop: 5
        }
      }}
    >
        <Tab.Screen 
        name="Chat" 
        component={ChatScreen} 
        options={{tabBarIcon: ({ color, size }) => (
            <Ionicons name='chatbubbles-sharp' size={25} color={'#7454de'}/>
        ),}}
        />
        <Tab.Screen 
        name="Link" 
        component={HomeScreen} 
        options={{tabBarIcon: ({ color, size }) => (
            <Entypo name='link' size={42} color={'#7454de'}/>
        ),}}
        />
        <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{tabBarIcon: ({ color, size }) => (
            <Ionicons name='person' size={25} color={'#7454de'}/>
        ),}}
        />
    </Tab.Navigator>
  );
};

export default MainNavigator