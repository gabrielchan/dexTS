import React from 'react'
import CardList from '../presentation/CardList'
import MainDecoder from '../../service/MainDecoder';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import { 
  StyleSheet, 
  View,
} from 'react-native';
import DarkThemeColors from '../../config/themes/DarkThemeColors';

const UnhelpfulThoughtsScreen: NavigationStackScreenComponent = () => {
  const thoughtsArray = MainDecoder("Unhelpful Thoughts");
  return (
    <View style={styles.container}>
      <CardList cardList={thoughtsArray} />
    </View>
  );
}

UnhelpfulThoughtsScreen.navigationOptions = {
  headerTitle: 'Unhelpful Thoughts'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DarkThemeColors.background
  },
});

export default UnhelpfulThoughtsScreen;