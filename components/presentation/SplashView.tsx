import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';
import TextView from './TextView';

const navigationOptions = {
  title: 'SplashView',
};

interface Props {
  navigation: any;
  navigationOptions?: Object;
}

const SplashView: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <TextView />
      <View style={styles.buttonContainer}>
        <Button
          title="Test Button"
          onPress={() => Alert.alert('Button Press Successful')}
        />
        <Button
          title="Go to CardList"
          onPress={() => props.navigation.navigate('CardList')}
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
    justifyContent: 'space-around'
  },
});

export default SplashView;