import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import capitalize from '../utils/capitalize';

const Person = ({ person }) => (
  <TouchableOpacity onPress={() => console.log('Press clicked', person.name.first)}>
    <View style={styles.line}>
      <Image style={styles.avatar} source={{uri: person.picture.thumbnail}} />
      <Text style={styles.lineText}>{ `${capitalize(person.name.title)} ${capitalize(person.name.first)} ${capitalize(person.name.last)}` }</Text>
    </View>
  </TouchableOpacity>
);

export class People extends Component {
  constructor(props) {
    super(props)
    this.state = { people: [] };
  }

  componentDidMount() {
    fetch('https://randomuser.me/api?results=5&nat=BR&exc=login,dob,registered,info,location,id')
      .then(res => res.json())
      .then(({ results }) => this.setState({ people: results }));
  }

  render() {
    return (
      <View style={styles.container}>
        { this.state.people.map(person => <Person key={person.name.first} person={person}/>) }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e2f9ff',
  },

  line: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    alignItems: 'center',
    flexDirection: 'row',
  },

  lineText: {
    fontSize: 20,
    paddingLeft: 15,
    flex: 7,
  },

  avatar: {
    aspectRatio: 1,
    marginLeft: 15,
    borderRadius: 50,
    flex: 1,
  }
});

export default People;
