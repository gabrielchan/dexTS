import React from 'react';
import {
  View,
  FlatList,
  Text
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
  }
]

export default class CardView extends React.Component<Props> {
  cardData = testData;
  render() {
    return (
      <View>
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
