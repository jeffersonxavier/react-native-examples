import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './src/components/Header';

export default class App extends Component {

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
        <Header title="People"/>
        { this.state.people.map(person => <Text key={person.name.first}>{ person.name.first } </Text>) }
      </View>
    );
  }
}
