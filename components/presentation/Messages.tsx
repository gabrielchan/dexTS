import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native'
import {
  Text, 
  Divider,
} from 'react-native-elements'

interface Props {
  user: string,
  message: string,
};

const Message: React.FC<Props> = (prop) => {
  return (
    <View style={styles.container}>
      <Text style={styles.user}>{prop.user}</Text>
      <Text>{prop.message}</Text>
      <Divider/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  user: {
    fontWeight: 'bold'
  }
});

export default Message;