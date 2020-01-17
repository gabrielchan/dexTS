import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { Input } from 'react-native-elements';
import Message from '../presentation/Messages';

const VoidScreen: NavigationStackScreenComponent = () => {
  const [input, setInput] = useState<string>('');
  const [messages, setMessages] = useState<Array<string>>([]);
  return (
    <View style={styles.container}>
      <Message user="Gabriel" message={input}/>
      <View style={styles.inputBoxContainer}>
        <Input
          placeholder="Type a message..."
          onChangeText={(text: string) => setInput(text)}
          onSubmitEditing={() => setMessages([...messages, input])}
          value={input}
        />
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputBoxContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignSelf: 'stretch'
  }
});

export default VoidScreen;