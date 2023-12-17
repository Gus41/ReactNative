import React, { Component } from 'react';

import {
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
    <View>
      <Comp_one/>
    </View>
  )
}

