import React, { useState } from 'react';
import { View, TouchableOpacity, Text, ActivityIndicator, Alert, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import firebase from '../services/api';
import FormInput from '../components/FormInput';
import { userLogin } from '../actions';

const Login = ({ userLogin }) => {
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    setMessage('');
    userLogin(email, password);
  }

  const newUser = () => {
    Alert.alert(
      'Cadastrar usuário',
      'Deseja se cadastrar no sistema?',
      [
        { text: 'NÃO' },
        {
          text: 'SIM',
          onPress: () => {
            setIsLoading(true);
            setMessage('');

            firebase.auth().createUserWithEmailAndPassword(email, password)
              .then(user => console.log(user))
              .catch(error => {
                console.log(error);
                switch (error.code) {
                  case 'auth/email-already-in-use':
                  case 'auth/account-exists-with-different-credential':
                    setMessage('E-mail já está cadastrado!');
                    break;
                  default:
                    setMessage('Erro desconhecido!');
                    break;
                }
              })
              .then(() => setIsLoading(false));
          }
        },
      ],
      { cancelable: false }
    );
  }

  const handleButtons = () => (
    <View style={styles.buttons}>
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={newUser} style={styles.button}>
        <Text style={styles.buttonText}>Novo Uuário</Text>
      </TouchableOpacity>
    </View>
  );

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
          : handleButtons()
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

  buttons: {
    marginTop: 25,
  },

  button: {
    marginTop: 15,
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

// export default Login;
export default connect(null, { userLogin })(Login);
