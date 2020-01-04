import React from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet
} from 'react-native';
import Cards from '../presentation/Card';

/*
interface Props {
  cardData: {
    header: string,
    content1: string,
    content2: string
  }[];
};
*/

type CardItems = {
  header: string,
  content1: string,
  content2: string
};

interface Props extends Array<CardItems> {
  cardData: CardItems[]
}

interface State {

}

export default class CardView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    /*
    this.props.cardData.map((CI, index) => {
      console.log("CI: " + CI);
      console.log("CI.header " + CI.header);
      console.log("CI.Habit " + CI.Habit);
      console.log("CI.Object.keys() " + Object.keys(CI));
      console.log("index: " + index);
    });
    */
  }
  render() {
    console.log("test prints: " + this.props.cardData[0].header);
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.cardData}
          keyExtractor={(item) => item.header}
          renderItem={({item}) =>
            <Cards headerText={item.header} content={item.content1}/>
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