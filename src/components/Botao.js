import React from "react";
import {StyleSheet, View,TouchableOpacity,Text } from "react-native";



export default function Botao(props){
    return (
        <TouchableOpacity style= {props.style} onPress={props.onPress} >
                <Text style = {props.estiloTexto}>{props.texto}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    botao: {
        borderRadius: 10,
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 90,
        borderColor: '#000',
        backgroundColor: '#aa00aa',
        width: 300,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'

    },
    texto: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#ffffff',
        alignItems:'center',
        width: 200,
        textAlign: 'center'
      },
})

