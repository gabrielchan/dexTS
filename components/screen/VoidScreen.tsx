import React, { useState } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import Message from '../presentation/Messages';

const VoidScreen: NavigationStackScreenComponent = () => {
  return (
    <View style={styles.container}>
      <Message />
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