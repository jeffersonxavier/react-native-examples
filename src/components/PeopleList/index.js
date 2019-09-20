import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const Person = ({ name }) => (
  <View style={styles.line}>
    <Text style={styles.lineText}>{ name }</Text>
  </View>
);

export class PeopleList extends Component {
  constructor(props) {
    super(props)
    this.state = { people: [] };
  }

  componentDidMount() {
    fetch('https://randomuser.me/api?results=5&nat=BR&exc=login,dob,registered,info,location,picture,id')
      .then(res => res.json())
      .then(({ results }) => this.setState({ people: results }));
  }

  render() {
    return (
      <View style={styles.container}>
        { this.state.people.map(person => <Person key={person.name.first} name={person.name.first}/>) }
      </View>
    )
  }
}

export default PeopleList
