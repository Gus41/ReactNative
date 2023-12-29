import React, { Component,useState } from 'react';

import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableHighlight
} from 'react-native'

import styles from '../styles/style';

export default function(){
    const[Cont,SetCont] = useState(0)
    return(
        <View>
            <TouchableHighlight style={styles.btn}
            onPress={()=>{
                SetCont(Cont +1)
            }}
            underlayColor='gray'
            >
                <Text style={styles.txt}>Elemento clicavel</Text>
            </TouchableHighlight>
            <Text style={styles.txt}>Valor: {Cont}</Text>

        </View>
    )
}