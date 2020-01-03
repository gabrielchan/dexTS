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
import Cards from './components/presentation/Card';
import CardView from './components/class/CardView';

const App = () => {
  const usingHermes = typeof HermesInternal === 'object' && HermesInternal !== null;
  const testData = [
    {
      key: 'key',
      value: 'value'
    },
    {
      key: 'key2',
      value: 'value2'
    }
  ];
  return (
    <ScrollView>
      <View>
        <Cards headerText='First Card' content='First Card Items' />
        <Cards headerText='Second Card' content='This is the second card that should be stored below' />
      </View>
      <View>
        <CardView blank='' />
      </View>
    </ScrollView>
  );
};

//    <Title title='Hello World'/>

export default App;
