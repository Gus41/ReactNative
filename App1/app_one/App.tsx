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


export default function app_one(){
  return (
    <View style={styles.container}>
      <Comp_one nome="Teste" quantidade={1} />
      <Comp_one nome="Teste" quantidade={2} />
      <Comp_one nome="Teste" quantidade={3} />
      <Comp_one nome="Teste" quantidade={4} />
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor : 'gray'
  }
})


