import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import capitalize from '../../utils/capitalize';
import styles from './styles';

const Person = ({ person }) => {
  const { title, first, last } = person.name;
  return (
    <TouchableOpacity onPress={() => console.log('Press clicked', first)}>
      <View style={styles.line}>
        <Image style={styles.avatar} source={{uri: person.picture.thumbnail}} />
        <Text style={styles.lineText}>{ `${capitalize(title)} ${capitalize(first)} ${capitalize(last)}` }</Text>
      </View>
    </TouchableOpacity>
  );
};

export class PeoplePage extends Component {
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

export default PeoplePage;
