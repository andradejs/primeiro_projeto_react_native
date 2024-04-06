import React from "react";
import {TextInput } from "react-native";


export default function Campo(){
    return (
        <TextInput keyboardType="default"  style ={{
            height: 30,
            backgroundColor: "white",
            borderRadius: 8,
            borderColor: '#1E90FF',
            borderWidth:3,
            width: 200,

        }} />

    );
}