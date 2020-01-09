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
import CardListScreen from './components/screen/CardListScreen';
import SplashScreen from './components/screen/SplashScreen';
import CounterScreen from './components/screen/CounterScreen';

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
    Splash: { screen: SplashScreen },
    CardList: { screen: CardListScreen },
    Counter: { screen: CounterScreen },
  },
  {
    initialRouteName: 'Splash',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      tabBarLabel: 'Main Stack Nav',
    },
  },
);

const App = () => {
  const usingHermes = typeof HermesInternal === 'object' && HermesInternal !== null;
  const AppNavigator = createAppContainer(MainNavigator);
  return (
    <AppNavigator/>
  );
}

export default App;
