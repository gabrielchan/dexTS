import React, { useState } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import Message from '../presentation/Messages';
import DarkThemeColors from '../../config/themes/DarkThemeColors';

const VoidScreen: NavigationStackScreenComponent = () => {
  return (
    <View style={styles.container}>
      <Message />
    </View>
  );
};

VoidScreen.navigationOptions = {
  headerTitle: 'Messaging Rant'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DarkThemeColors.background
  },
});

export default VoidScreen;