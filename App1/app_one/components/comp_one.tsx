import React, { Component } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export default function Comp_one(props: { nome: string , quantidade: number}){
    return(
        <View style = {styles.content}>
            <View>
                <Text style={styles.txt}>Texto vindo de compontente</Text>
            </View>
            <View>
                <Text style={styles.txt}>{props.nome} {props.quantidade}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    txt:{
        color: 'black',
        fontSize:20,
        textAlign: 'center'
    },
    content:{
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        shadowColor: 'black',
        margin:10
    }
})
