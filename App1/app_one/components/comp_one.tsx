import React, { Component } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Text,
  View,
} from 'react-native';
import styles from '../styles/style';
export default function Comp_one(props: { nome: string , quantidade: number}){
    return(
        <View style = {styles.content}>
            <View>
                <Text style={styles.txt}>Texto vindo de componetes</Text>
            </View>
            <View>
                <Text style={styles.txt}>{props.nome} {props.quantidade}</Text>
            </View>
        </View>
    )
}


