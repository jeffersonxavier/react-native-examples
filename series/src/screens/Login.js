import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import FormInput from '../components/FormInput';

const Login = () => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});

export default Login;
