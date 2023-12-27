import React, {useState} from "react";
import { View, Text, TextInput,SafeAreaView } from "react-native";
import styles from "../styles/style";

export default function(){

    const [name,SetName] = useState('NomeAqui')
    return(
        <SafeAreaView>
            <Text style={styles.txt}>Digite seu nome</Text>
            <TextInput style={styles.text_inp}
            value={name}
            onChangeText={text=>SetName(text)}
            />
        </SafeAreaView>
    )
}

function UseState(arg0: string): [any, any] {
    throw new Error("Function not implemented.");
}
