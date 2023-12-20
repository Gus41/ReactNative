import React, { Component } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Text,
  View,
} from 'react-native';
import styles from '../styles/style';
export default function Comp_one(){
    return(
        <View style ={{width:'100%',backgroundColor:'white',padding:10,flexDirection:'row',justifyContent:'space-around'}}>
            <View style={{width:50,height:50,backgroundColor:'#00f'}}></View>
            <View style={{width:50,height:50,backgroundColor:'#00a'}}></View>
            <View style={{width:50,height:50,backgroundColor:'#005'}}></View>
        </View>
    )
}


