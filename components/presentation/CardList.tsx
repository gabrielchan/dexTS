import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import {
  Card,
  Text,
} from 'react-native-elements';

export interface CardItems {
  header: string,
  content: string,
  subcontent: string
};

interface Props {
  cardList: CardItems[];
}

const CardList: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.cardList}
        keyExtractor={(item) => item.header}
        renderItem={({ item }) =>
          <Card
            title={item.header}>
            <Text style={styles.content}>
              {item.content}
            </Text>
            <Text style={styles.subcontent}>
              {item.subcontent}
            </Text>
          </Card>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  subcontent: {
    marginBottom: 10,
    fontWeight: "bold"
  },
  content: {
    marginBottom: 10,
    color: "grey"
  },
  container: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
})

export default CardList;