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
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CardListView from './components/presentation/CardListView';
import SplashView from './components/presentation/SplashView';
import PlusMinusView from './components/class/PlusMinusView';

/*
import testData from './test_data/sampleCardData.json'; //testData is a JSON Array (not a JSON Object)
*/

/*
const App = () => {
  const usingHermes = typeof HermesInternal === 'object' && HermesInternal !== null;
  return (
    <CardList cardList={testData} />
  );
};
*/

const MainNavigator = createStackNavigator(
  {
    Splash: { screen: SplashView },
    CardList: { screen: CardListView },
    PlusMinus: { screen: PlusMinusView },
  },
  {
    initialRouteName: 'Splash',
  }
);

const App = () => {
  const usingHermes = typeof HermesInternal === 'object' && HermesInternal !== null;
  const AppNavigator = createAppContainer(MainNavigator);
  return (
    <AppNavigator/>
  );
}

export default App;
