import React from "react";
import { View, Text, TextInput, StyleSheet, Image } from "react-native";
import { useState } from "react";

export default function Temperatura() {
    
    
   
    const [valueCelsius, setValueCelsius] = useState(0)
    const [valueFar, setValueFar] = useState(0)
    const [campoCelsius,setCampoCelsius] = useState('')
    const [campoFahrenheit,setCampoFahrenheit] = useState('')
    
    
    let celsius;
    let fahrenheit;
    
    const tranformarCelsius = (text) =>{
        
        setCampoCelsius('')
        fahrenheit = text
        celsius = ((fahrenheit-32) / 1.8).toFixed(1) 
        setValueFar(celsius);
    }
    
    const tranformarFahrenheit = (text) =>{
        
        setCampoFahrenheit('')
        let celsius = text;
        fahrenheit = ((celsius*1.8) + 32).toFixed(1);
        setValueCelsius(fahrenheit);
        
    }


    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Conversor de Temperatura</Text>
            <Image source={require('../../assets/img/temperatura.png')} />
            <View>
                <Text style={styles.texto}>Celsius (C°)</Text>
                <TextInput

                    style={styles.input}
                    placeholder={`${valueFar}`}
                    placeholderTextColor="#999"
                    value={`${campoCelsius}`}
                    onChangeText={
                        (text) => {
                            setCampoCelsius(text)
                            tranformarFahrenheit(text)
                        }
                    }



                />
                <Text style={styles.texto}>Fahrenheit (F°)</Text>
                <TextInput
                    style={styles.input}
                    placeholder={`${valueCelsius}`}
                    placeholderTextColor="#999"
                    value={`${campoFahrenheit}`}
                    onChangeText={
                        (text) => {
                            setCampoFahrenheit(text)
                            tranformarCelsius(text)
                        }
                    }

                />
            </View>
        </View>)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#000011',
        opacity: 0.90,
        width: 'auto',
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 20,
        backgroundColor: 'white',
        fontSize: 20,
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#eeeeee',
        textAlign: 'left',
        marginVertical: 10,
    },
    titulo: {
        fontSize: 25,
        color: 'white',
        marginBottom: 40,
        fontWeight: "bold"

    },
});
