import React, { Component } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export default function Comp_one(){
    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.txt}>Texto vindo de compontente</Text>
            </View>
            <View>
                <Text style={styles.txt}>Componente_view</Text>
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
    container:{
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor : 'gray'
    }
})
