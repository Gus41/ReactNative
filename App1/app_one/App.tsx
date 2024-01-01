import React, { Component,useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  ImageBackground,
  Switch,
  SafeAreaView,
  StatusBar,
  TextInput,

} from 'react-native';
import List from './components/flatlist'
import { createStackNavigator } from '@react-navigation/stack';
// react-native run-android

import Comp_one from './components/comp_one';
import Boxes from './components/boxes'
import styles from './styles/style';
import Cars from './components/car_comp'
import Text_input from './components/textinp'
import Scroll from './components/scroll_view'
import Touch from './components/touch'
import Modal from './components/modal'
import { create } from 'react-test-renderer';
function condicional(p:boolean){
  if(p){
    return(
      <Text style={{color:'white'}}>Paramentro enviado</Text>
    )
  }
  return(
    <Text>- - - </Text>
  )
}

const ImageBackPick = './assets/backgroundpicture.jpg'

//states
const Stack = createStackNavigator()
function Home({}){
  return(
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  )
}
function More(){
  return(
    <View style={styles.container}>
      <Text>More</Text>
    </View>
  )
}

export default function app_one(){
  const [StateOn,setStateOn] = useState(true)
  const [color,setColor] = useState('black')
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name='Home'
        component={Home}
        options={{title:'Home'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


