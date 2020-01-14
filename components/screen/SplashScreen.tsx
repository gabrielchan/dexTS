import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { Button } from 'react-native-elements';
import { 
  NavigationStackProp,
  NavigationStackScreenComponent,
} from 'react-navigation-stack'
import Paragraph from '../presentation/Paragraph';

interface Props {
  navigation: NavigationStackProp<{screen: string}>;
}

const SplashScreen: NavigationStackScreenComponent<Props> = (props) => {
  return (
    <View style={styles.container}>
      <Paragraph />
      <View style={styles.buttonContainer}>
        <Button
          title="Unhelpful Thoughts"
          onPress={() => props.navigation.navigate('UnhelpfulThoughts')}
          buttonStyle={styles.button}
        />
        <Button
          title="Counter"
          onPress={() => props.navigation.navigate('Counter')}
          buttonStyle={styles.button}
        />
      </View>
    </View>
  );
}

SplashScreen.navigationOptions = {
  headerTitle: 'Home Screen'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10
  },
  button: {
    margin: 5,
  }
});

export default SplashScreen;