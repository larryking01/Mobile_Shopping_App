// modules
import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicon from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'



// components
import Home from './screens/Home'
import Categories from './screens/Categories'
import Feed from './screens/Feed'
import Account from './screens/Account'
import Help from './screens/Help'



const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
          initialRouteName='Home'
          tabBarOptions={{
            activeTintColor: 'orange',
            inactiveTintColor: 'black',
            labelStyle: {
              fontSize: 12
            }
          }}
      >

         <Tab.Screen name='Home' component={ Home }
            options={{
              tabBarLabel : 'Home',
              tabBarIcon: ({color, size}) => (
                <Ionicon name='home' color={color} size={23} />
              )
            }} />


         <Tab.Screen name='Categories' component={ Categories }
           options={{
             tabBarLabel: 'Categories',
             tabBarIcon: ({ color, size }) => (
               <MaterialIcons name='category' color={color} size={23} />
             )
           }} />


         <Tab.Screen name='Feed' component={ Feed } 
            options={{
              tabBarLabel: 'Feed',
              tabBarIcon: ({color, size}) => (
                <FontAwesome name='feed' color={color} size={23} />
              )
            }} />


         <Tab.Screen name='Account' component={ Account }
           options={{
             tabBarLabel: 'Account',
             tabBarIcon: ({color, size}) => (
                <Ionicon name='person' color={color} size={23} />
             )
           }} />


         <Tab.Screen name='Help' component={ Help }
           options={{
             tabBarLabel: 'Help',
             tabBarIcon: ({color, size}) => (
                <MaterialIcons name='live-help' color={color} size={23} />
             )
           }} />


      </Tab.Navigator>
      <StatusBar style='light' />
    </NavigationContainer>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
