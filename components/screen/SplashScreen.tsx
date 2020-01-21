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
import { withNavigation } from 'react-navigation';
import DarkThemeColors from '../../config/themes/DarkThemeColors';

interface Props {
  navigation: NavigationStackProp;
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
          titleStyle={styles.text}
        />
        <Button
          title="Counter"
          onPress={() => props.navigation.navigate('Counter')}
          buttonStyle={styles.button}
          titleStyle={styles.text}
        />
        <Button
          title="Messenger"
          onPress={() => props.navigation.navigate('Void')}
          buttonStyle={styles.button}
          titleStyle={styles.text}
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
    justifyContent: 'flex-start',
    backgroundColor: DarkThemeColors.background,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 10
  },
  button: {
    margin: 5,
    backgroundColor: DarkThemeColors.primary
  },
  text: {
    color: DarkThemeColors.onPrimary
  }
});

export default withNavigation(SplashScreen);