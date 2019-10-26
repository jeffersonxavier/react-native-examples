import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import capitalize from '../utils/capitalize';
import api from '../services/api';

const Person = ({ person, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.line}>
      <Image style={styles.avatar} source={{uri: person.picture.thumbnail}} />
      <Text style={styles.lineText}>{ `${capitalize(person.name.title)} ${capitalize(person.name.first)} ${capitalize(person.name.last)}` }</Text>
    </View>
  </TouchableOpacity>
);

export class People extends Component {
  constructor(props) {
    super(props)
    this.state = { people: [], loading: false, error: false };
  }

  componentDidMount() {
    this.setState({ loading: true });
    api.get('/api?results=15&nat=BR&exc=login,dob,registered,info,location,id')
      .then(({ data }) => {
        this.setState({ people: data.results, loading: false });
      })
      .catch(error => {
        console.log(error);
        this.setState({ error: true, loading: false });
      });
  }

  renderList() {
    return (
      <FlatList
        data={this.state.people}
        renderItem={({ item }) => (
          <Person
            key={item.name.first}
            person={item}
            onPress={() => this.props.navigation.navigate('PeopleDetailPage', { person: item })}/>
        )}
        keyExtractor={item => item.name.first}
      />
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.loading
            ? <ActivityIndicator size="large" color="#7aa9f5" />
            : this.state.error
              ? <Text style={styles.error}>Algo deu errado...</Text>
              : this.renderList()
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  error: {
    color: 'red',
    alignSelf: 'center',
    fontSize: 18,
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
  },
});

export default People;
