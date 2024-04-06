import React from "react";
import {StyleSheet,View,Text} from 'react-native'; 

export default function Mensagem(props){
    

    return (
        <View>
            <Text style={style.texto}>{props.mensagem}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    texto:{
        color: '#ffafaf',
        margin: 15,
    }
})