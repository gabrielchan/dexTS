import React from 'react';
import {
  View,
  StyleSheet,
  Alert,
} from 'react-native';
import {
  Button,
  Text,
} from 'react-native-elements';

interface Props {
  counter: number,
}

const CounterView: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>mobx-react-lite Counter</Text>
      <Text style={styles.header}>{props.counter}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="+"
          onPress={() => Alert.alert('Will increment in future')}
          buttonStyle={styles.button}
        />
        <Button
          title="-"
          onPress={() => Alert.alert('Will decrement in future')}
          buttonStyle={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around'
  },
  buttonContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  button: {
    margin: 5,
    height: 50,
    width: 150
  }
});

export default CounterView;