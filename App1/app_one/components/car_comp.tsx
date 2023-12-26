//componente de classe

import React, { Component,useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, Switch } from 'react-native';

export default function Comp_one(props:{name:string}) {
    const [Car_on,ChangeCar]= useState(true)
    return(
        <View>
            <Text style={styles.list} >Carro: {props.name}  - Ligado: {Car_on?'Sim':'Não'}</Text>
            <Switch
            trackColor={{false:'#777',true:'#8bf'}} //cores do switch
            thumbColor={Car_on?'#00f':'#444'} // cor da bolinha
            value={Car_on}
            onValueChange={()=>{
                ChangeCar(!Car_on)
            }}
            />
        </View>
     )
}
const styles = StyleSheet.create({
    list:{
        backgroundColor:'#008',
        padding:15,
        margin:5,
        color:'white',
        borderRadius:10
    }
})