import React, { Component,useState } from 'react';

import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableHighlight,
  Modal,
  Button
} from 'react-native'

import styles from '../styles/style';

export default function(){
    
    const [visible,setVisible] = useState(true)

    function ShowButton(param:boolean){
        if(!param){
            return(
                <Button
                        title='Mostrar'
                        onPress={()=>{
                            setVisible(true)
                        }}
                />
            )
        }
    }

    return(
        <View>
            <Modal
            animationType='fade'
            transparent={true}
            visible={visible}
            style={{}}
            >
                <View>
                    <Text>Texto dentro de modal</Text>
                    <Button
                    title='Fechar'
                    onPress={()=>{
                        setVisible(!visible)
                    }}
                    />
                </View>
            </Modal>
            {ShowButton(visible)}
        </View>
    )
}