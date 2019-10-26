import React, { useState } from 'react';
import { View, TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native';
import firebase from '../services/api';
import FormInput from '../components/FormInput';

const Login = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    setMessage('');
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => console.log(user))
      .catch(error => {
        console.log(error, error.code);
        switch (error.code) {
          case 'auth/invalid-email':
            setMessage('E-mail mal formatado!');
            break;
          case 'auth/user-not-found':
            setMessage('E-mail incorreto!');
            break;
          case 'auth/wrong-password':
            setMessage('Senha incorreta!');
            break;
          default:
            setMessage('Erro desconhecido!');
            break;
        }
      })
      .then(() => setIsLoading(false));
  }

  return (
    <View style={styles.container}>
      <FormInput
        placeholder="Seu E-mail"
        keyboardType="email-address"
        capitalize="none"
        setInput={setEmail}/>

      <FormInput
        placeholder="Sua Senha"
        capitalize="none"
        secureText={true}
        setInput={setPassword}/>

      {
        isLoading
          ? <ActivityIndicator size="large" style={styles.indicator} />
          : <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
      }

      <Text>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },

  indicator: {
    marginTop: 40,
  },

  button: {
    marginTop: 40,
    height: 42,
    backgroundColor: '#6ca2f7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  }
});

export default Login;
