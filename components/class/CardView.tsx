import React from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet
} from 'react-native';
import Cards from '../presentation/Card';

interface Props {
  blank: string;
};

/*
interface State {
  cardData: [];
};
*/

const testData = [
  {
    h: "header 1",
    t: "text 1"
  },
  {
    h: "header 2",
    t: "text 2"
  },
  {
    h: "header 3",
    t: "text 3"
  },
  {
    h: "header 4",
    t: "text 4"
  },
  {
    h: "header 5",
    t: "text 5"
  },
  {
    h: "header 6",
    t: "text 6"
  },
  {
    h: "header 7",
    t: "text 7"
  },
  {
    h: "header 8",
    t: "text 8"
  },
  {
    h: "header 9",
    t: "text 9" 
  }, {
    h: "header 10",
    t: "text 10"
  }
]

export default class CardView extends React.Component<Props> {
  cardData = testData;
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          keyExtractor={item => item.h}
          renderItem={({item}) =>
            <Cards headerText={item.h} content={item.t}/>
          }
          data={testData}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
})
