import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const FormInput = ({ setInput, placeholder, keyboardType = 'default', capitalize = 'sentences', secureText = false }) => (
  <View style={styles.container}>
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#999"
      keyboardType={keyboardType}
      autoCapitalize={capitalize}
      secureTextEntry={secureText}
      onChangeText={setInput}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#6ca2f7',
    fontSize: 18,
  },
});

export default FormInput;
