import React, { Component } from 'react';
import { Text, View } from 'react-native';

const Person = ({ name }) => (
  <Text>{ name }</Text>
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
      <View>
        { this.state.people.map(person => <Person key={person.name.first} name={person.name.first}/>) }
      </View>
    )
  }
}

export default PeopleList
