import React from 'react';
import { View } from 'react-native';
import People from './src/pages/People';
import Header from './src/components/Header';

const App = () => (
  <View>
    <Header title="Pessoas"/>
    <People/>
  </View>
);

export default App;
