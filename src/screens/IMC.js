import React from "react";
import { StyleSheet, View, Text, TextInput, Image } from "react-native";
import { useState } from "react";
import Resultado from "../components/Resultado";
import Botao from "../components/Botao";


export default function IMC() {

    const [altura, setAltura] = useState(null);
    const [peso, setPeso] = useState(null);
    const [stateOnPress, setStateOnPress] = useState(false);


    const calacularIMC = () => (peso / (altura * altura)).toFixed(2);
    const mudarFalse = () => setStateOnPress(false);
    const mudarTrue = () => setStateOnPress(true);
   

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Calcule seu IMC</Text>
            {stateOnPress ?
                <Resultado resultado={calacularIMC()} /> :
                <Image source={require('../../assets/img/imc2.png')} />
            }
            <View>

                <Text style={styles.texto}>Peso</Text>
                <TextInput
                    keyboardType="decimal-pad"
                    style={styles.input}
                    placeholder="70 kg"
                    placeholderTextColor="#999"
                    onChangeText={setPeso}
                    onChange={mudarFalse}
                    value={peso}
                />
                <Text style={styles.texto}>Altura</Text>
                <TextInput
                    keyboardType="decimal-pad"
                    style={styles.input}
                    placeholder="1.70m"
                    placeholderTextColor="#999"
                    onChangeText={setAltura}
                    onChange={mudarFalse}
                    value={altura}
                />
                <Botao onPress={mudarTrue} style={styles.botao} texto={'Calcular IMC'} estiloTexto={styles.texto} />
            </View>
        </View>
    );
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
    titulo: {
        fontSize: 30,
        color: 'white',
        marginBottom: 40,

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
    },
    botao: {
        borderRadius: 10,
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 90,
        borderColor: '#000',
        backgroundColor: '#aa00aa',
        width: 300,

    },
})