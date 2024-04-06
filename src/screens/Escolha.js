import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Botao from "../components/Botao";




export default function Escolha({ navigation }) {

    return (

        <View style={styles.container}>
            <Text style={styles.titulo}>Escolha uma ação</Text>
            <Botao
                style={styles.botao} 
                texto={'IMC'}
                onPress={() => navigation.navigate('IMC')}
                estiloTexto = {styles.texto}

            />
            <Botao 
                onPress={() => navigation.navigate('Temperatura')}
                style={styles.botao}
                texto={'Conversor de Temperatura'}
                estiloTexto = {styles.texto}

            />
            <Botao onPress={() =>
                navigation.navigate('Raizes')}
                style={styles.botao}
                texto={'Raizes do 2º grau'}
                estiloTexto = {styles.texto}
            />
        </View>
    );
}


const styles = StyleSheet.create({

    titulo: {
        fontSize: 30,
        color: 'white',
        marginBottom: 40,

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#000011',
        opacity: 0.90,
        width: 'auto',
        gap: 20,
    },
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

});
