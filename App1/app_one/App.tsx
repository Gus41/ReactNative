import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';
// react-native run-android
/*
export default class App extends Component{
   render(){
    return(
      <View>
        <Text>Teste</Text>
      </View>
    )
   }
}

*/
import Comp_one from './components/comp_one';
import Boxes from './components/boxes'
import styles from './styles/style';

function condicional(p:boolean){
  if(p){
    return(
      <Text>Paramentro enviado</Text>
    )
  }
  return(
    <Text>- - - </Text>
  )
}


export default function app_one(){
  return (
    <View style={styles.container}>
      <Boxes></Boxes>
      {condicional(false)}
    </View>
  )
}



