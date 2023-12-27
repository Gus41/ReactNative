import React, { Component,useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  ImageBackground,
  Switch,
  SafeAreaView
} from 'react-native';
import List from './components/flatlist'
// react-native run-android

import Comp_one from './components/comp_one';
import Boxes from './components/boxes'
import styles from './styles/style';
import Cars from './components/car_comp'
import Text_input from './components/textinp'
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


export default function app_one(){
  const [StateOn,setStateOn] = useState(true)
  return (
    
    <SafeAreaView style={styles.container}>
     
       
        <Text_input/>
        <Button
        title={StateOn?'Desligar':'Ligar'}
        onPress={()=>{
          Alert.alert('Valor do State mudado')
          setStateOn(!StateOn)
        }}/>
       
        {condicional(true)}
        {
          StateOn?
          <View>
            <Text>Estado Ligado</Text>
          </View>
          :
          <View>
            <Text>Estado desligado</Text>
          </View>
        } 

        <Cars name='Golf'/>
        <Cars name='Sandra'/>
      
    </SafeAreaView>
  )
}



