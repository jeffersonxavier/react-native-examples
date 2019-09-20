import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import PeopleList from './src/components/PeopleList';

const App = () => (
  <View>
    <Header title="People"/>
    <PeopleList/>
  </View>
);

export default App;

