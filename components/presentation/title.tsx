import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const Title = ({title} : {title: string}) => {
  return(
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'black',
    marginTop: 40,
    
  },
  headerText: {
    color: 'white',
    fontSize: 22,
    fontWeight: '500'
  }
});

export default Title;