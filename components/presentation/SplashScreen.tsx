import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';
import CardList from './CardListScreen';
import testData from '../../test_data/sampleCardData.json';
//testData is a JSON Array (not a JSON Object) - look to remove soon as this shouldn't live in this file

const navigationOptions = {
  title: 'SplashScreen',
};

interface Props {
  navigation: any;
  navigationOptions?: Object;
}

const SplashScreen: React.FC<Props> = (props) => {
  console.log(testData);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hardcoded Text</Text>
      <Button
        title="Test Button"
        onPress={() => Alert.alert('Button Press Successful')}
      />
      <Button
        title="Go to CardList"
        onPress={() => props.navigation.navigate('CardList', { cardList: testData })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 30
  },
  button: {
    marginTop: 10,
    marginBottom: 10
  }
});

export default SplashScreen;