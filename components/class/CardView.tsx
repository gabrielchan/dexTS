import React from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet
} from 'react-native';
import Cards from '../presentation/Card';
import { CardItems } from '../presentation/Card';

interface Props extends Array<CardItems> {
  cardData: CardItems[]
}

//to include a state in the future
interface State {

}

export default class CardView extends React.Component<Props, State> {
  //leaving the constructor here for now
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.cardData}
          keyExtractor={(item) => item.header}
          renderItem={({item}) =>
            <Cards header={item.header} content={item.content} subcontent={item.subcontent}/>
          }
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
});