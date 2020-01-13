import React from 'react';
import {
  View,
  StyleSheet,
  Alert,
} from 'react-native';
import {
  Button
} from 'react-native-elements';
import Paragraph from '../presentation/Paragraph';

const navigationOptions = {
  title: 'SplashView',
};

interface Props {
  navigation: any;
  navigationOptions?: Object;
}

const SplashScreen: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <Paragraph />
      <View style={styles.buttonContainer}>
        <Button
          title="Test Button"
          onPress={() => Alert.alert('Button Press Successful')}
          buttonStyle={styles.button}
        />
        <Button
          title="Go to CardList"
          onPress={() => props.navigation.navigate('UnhelpfulThoughts')}
          buttonStyle={styles.button}
        />
        <Button
          title="Go to Counter"
          onPress={() => props.navigation.navigate('Counter')}
          buttonStyle={styles.button}
        />
      </View>
    </View>
  );
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