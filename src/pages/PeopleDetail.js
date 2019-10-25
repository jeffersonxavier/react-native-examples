import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const Line = ({ label = '', value = '' }) => (
  <View style={styles.line}>
    <Text style={[
      styles.cell,
      styles.label,
      label.length > 8 ? styles.longLabel : null
    ]}>{label}:</Text>
    <Text style={[styles.cell, styles.content]}>{value}</Text>
  </View>
);

const PeopleDetail = ({ navigation }) => {
  const { person } = navigation.state.params;

  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{uri: person.picture.large}} />

      <View style={styles.detailContainer}>
        <Line label="E-mail" value={person.email}/>
        <Line label="Telefone" value={person.phone}/>
        <Line label="Celular" value={person.cell}/>
        <Line label="Nacionalidade" value={person.nat}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },

  detailContainer: {
    marginTop: 20,
    backgroundColor: '#b2f9ff',
    elevation: 1,
  },

  avatar: {
    aspectRatio: 1,
    borderRadius: 500,
  },

  line: {
    flexDirection: 'row',
    paddingTop: 3,
    paddingBottom: 3,
    borderWidth: 1,
    borderColor: '#c5c5c5'
  },

  cell: {
    fontSize: 18,
    paddingLeft: 5,
  },

  label: {
    fontWeight: 'bold',
    flex: 1,
  },

  content: {
    flex: 3,
  },

  longLabel: {
    fontSize: 12,
  }
});

export default PeopleDetail;
