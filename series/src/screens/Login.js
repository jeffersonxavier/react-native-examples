import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Button, StyleSheet } from 'react-native';
import FormInput from '../components/FormInput';

const Login = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = () => {
    console.log('login...', email, password);
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

      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
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
