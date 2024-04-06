import React from "react";
import { StyleSheet, View, Text, TextInput, Image } from "react-native";
import { useState } from "react";
import Botao from "../components/Botao";



export default function IMC() {

    const [termo1, setTermo1] = useState(0)
    const [termo2, setTermo2] = useState(0)
    const [termo3, setTermo3] = useState(0)
    const [stateOnPress, setStateOnPress] = useState(false)
    const [raiz1, setRaiz1] = useState(0)
    const [raiz2, setRaiz2] = useState(0)
    const [mensagem,setMensagem] = useState(0)
    const [useDelta,setUseDelta] = useState(0)
    
    

    const calcularDelta = () =>{

        let delta = (termo2**2) -4 * termo1 * termo3
        
        setUseDelta(delta)
        return delta;

    }
   
    const calcularRaizes = () =>{

        let delta = calcularDelta()
        if (delta >= 0){
            
            let msg = ((((-1) * termo2) + (delta ** (1/2))) / (2*termo1)).toFixed(2)
            setRaiz1(msg)
            setMensagem(msg)
            
            if (delta > 0){
            setRaiz2(((((-1) * termo2) - (delta ** (1/2))) / (2*termo1)).toFixed(2))
            }
            
                
        
        }else{
            setMensagem('Raiz inexistente')
        }

    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Calcule Bahskara</Text>
            {stateOnPress ?
                (<View style={{margin:40,alignItems:'center',justifyContent: 'center'}}>
                    {(useDelta <= 0 )?
                    <Text style={styles.raiz}>{mensagem}</Text>:
                    <View style={{flexDirection: "row",gap: 30}}>
                        <Text style={styles.raiz}>{raiz1}</Text>
                        <Text style={styles.raiz}>{raiz2}</Text>
                    </View>}
                </View>):
                <Image style={ styles.img } source={require('../../assets/img/bhaskara.jpg')} />
            }
            <View>

                <Text style={styles.texto}>1° Termo (ax²)</Text>
                <TextInput
                    keyboardType="numeric"
                    style={styles.input}
                    placeholder="0"
                    placeholderTextColor="#999"
                    onChangeText={
                        (text) =>{
                            
                            setStateOnPress(false)
                            setTermo1(text)
                        }
                    }
                />
                <Text style={styles.texto}>2° Termo (bx)</Text>
                <TextInput
                    keyboardType="numeric"
                    style={styles.input}
                    placeholder="0"
                    placeholderTextColor="#999"
                    onChangeText={
                        (text) =>{

                            setStateOnPress(false)
                            setTermo2(text)
                        }
                    }
                />
                <Text style={styles.texto}>3° Termo (c)</Text>
                <TextInput
                    keyboardType="decimal-pad"
                    style={styles.input}
                    placeholder="0"
                    placeholderTextColor="#999"
                    onChangeText={
                        (text) =>{
                            
                            setStateOnPress(false)
                            setTermo3(text)
                        }
                    }
                />
                <Botao onPress = {
                    () => {
                        calcularRaizes();
                        setStateOnPress(true);
                    }
                } style={styles.botao} texto={'Calcular Bhaskara'} estiloTexto={styles.texto} />
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
        marginBottom: 20,

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
        
    },
    botao: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: '#aa00aa',
        width: 300,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center'

    },
    img: {
        height:200,
        borderRadius:40,
        width: 200,
        margin: 20,
    },
    raiz:{
        fontSize: 50,
        color: '#6afaff',
        marginBottom: 20,
        textAlign: 'center'
    }
})