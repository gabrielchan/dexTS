/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import CardList from './components/presentation/CardList';
import testData from './test_data/sampleCardData.json'; //testData is a JSON Array (not a JSON Object)

const App = () => {
  const usingHermes = typeof HermesInternal === 'object' && HermesInternal !== null;
  return (
    <CardList cardList={testData} />
  );
};

export default App;
