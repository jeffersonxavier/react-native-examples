import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView, FlatList, StyleSheet } from 'react-native';
import capitalize from '../utils/capitalize';
import api from '../services/api';

const peopleArray = [
  {
    "gender": "male",
    "name": {
      "title": "Mr",
      "first": "Caetano",
      "last": "Barbosa"
    },
    "email": "caetano.barbosa@example.com",
    "phone": "(07) 9042-4440",
    "cell": "(80) 0994-5858",
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/31.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/31.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/31.jpg"
    },
    "nat": "BR"
  },
];

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
    this.state = { people: [] };
  }

  componentDidMount() {
    this.setState({ people: peopleArray });
    api.get('/api?results=15&nat=BR&exc=login,dob,registered,info,location,id')
      .then(({ data }) => {
        this.setState({ people: data.results });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.state.people}
        renderItem={({ item }) => (
          <Person
            key={item.name.first}
            person={item}
            onPress={() => this.props.navigation.navigate('PeopleDetailPage', { person: item })}/>
        )}
        keyExtractor={item => item.name.first}
      />
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
