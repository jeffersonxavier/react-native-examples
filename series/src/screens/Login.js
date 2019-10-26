import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Login = () => (
  <View style={styles.container}>
    <Text>Login</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
