import React from "react";
import {StyleSheet,View,Text} from 'react-native'; 

export default function Resultado(props){
    

    return (
        <View>
            <Text style={style.texto}>{props.resultado}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    texto:{
        color: '#ffffff',
        margin: 15,
        fontSize: 80,

    }
})