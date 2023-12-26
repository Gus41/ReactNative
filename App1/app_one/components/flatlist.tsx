import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    Alert,
    FlatList
} from 'react-native';

const data = [
    {
        id:'1',
        name:'Mouse',
        preco:25.00
    },
    {
        id:'2',
        name:'Monitor',
        preco:455.00
    },
    {
        id:'3',
        name:'Console',
        preco:2500.00
    }
]

export default function(){
    return(
        <View>
            <FlatList   
                data={data}
                keyExtractor={item=>item.id}
                renderItem={({item})=><Text style={styles.list}>Nome:{item.name} - Valor: {item.preco}</Text>}
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