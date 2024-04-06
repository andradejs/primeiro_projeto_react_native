import React from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { useState } from "react";
import Mensagem from "../components/Mensagem";


const Login = ({ navigation }) => {

  const [usuario, setUsuario] = useState(null);
  const [senha, setSenha] = useState(null);
  const [hasOnPress, setHasOnPress] = useState(true);
  const [mensagem, setMensagem] = useState(null);
  const [cont, setCont] = useState(2);

  const changeHasOnPress = () => {
    setHasOnPress(!hasOnPress);
  }

  const handleLogin = () => {
    if (usuario !== null || senha !== null) {
      setCont(cont - 1);
      setMensagem(`Você tem apenas mais ${cont} tentativas`);

      if (cont === 0) {
        changeHasOnPress();
        setMensagem('Voce não pode mais logar');
      }
    }
    else {
      navigation.navigate('Escolha');
    }
  };

  return (
    <View style={styles.container}>

      <Image style={styles.img} source={require('../../assets/img/cachorro.jpg')} />
      <Mensagem mensagem={mensagem} />
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        placeholderTextColor="#999"
        onChangeText={setUsuario}
        value={usuario}

      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry
        onChangeText={setSenha}
        value={senha}
      />
      {hasOnPress ? (<TouchableOpacity onPress={handleLogin} style={styles.botao}>
        <Text style={styles.texto}>Login</Text>
      </TouchableOpacity>) : (<TouchableOpacity onPress={null} style={styles.botaDesativado}>
        <Text style={styles.texto}>Login</Text>
      </TouchableOpacity>)}
    </View>
  );
};

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
  botao: {
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 90,
    borderColor: '#000',
    backgroundColor: '#aa00aa',
    width: 300,

  },
  botaDesativado: {
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 90,
    borderColor: '#000',
    backgroundColor: '#aa00aa',
    opacity: 0.3,
    width: 300,

  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#eeeeee',
    textAlign: 'center',
  },
  img: {
    height: 200,
    width: 200,
    borderRadius: 100,
    margin: 50,
  }
});

export default Login;



