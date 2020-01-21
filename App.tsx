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
import UnhelpfulThoughtsScreen from './components/screen/UnhelpfulThoughtsScreen';
import SplashScreen from './components/screen/SplashScreen';
import CounterScreen from './components/screen/CounterScreen';
import VoidScreen from './components/screen/VoidScreen';
import DarkThemeColors from './config/themes/DarkThemeColors';

const MainNavigator = createStackNavigator(
  {
    Splash: { screen: SplashScreen },
    UnhelpfulThoughts: { screen: UnhelpfulThoughtsScreen },
    Counter: { screen: CounterScreen },
    Void: { screen: VoidScreen },
  },
  {
    initialRouteName: 'Splash',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: DarkThemeColors.surface,
      },
      headerTintColor: DarkThemeColors.onSurface,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
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
