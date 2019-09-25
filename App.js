import React from 'react';
import { View } from 'react-native';
import Header from './src/components/Header';
import PeoplePage from './src/pages/PeoplePage';

const App = () => (
  <View>
    <Header title="People"/>
    <PeoplePage/>
  </View>
);

export default App;
