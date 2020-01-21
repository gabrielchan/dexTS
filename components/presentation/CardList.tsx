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
import DarkThemeColors from '../../config/themes/DarkThemeColors'

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
    <FlatList
      data={props.cardList}
      keyExtractor={(item) => item.header}
      renderItem={({ item }) =>
        <Card
          containerStyle={styles.container}
          titleStyle={styles.title}
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
  );
}

const styles = StyleSheet.create({
  subcontent: {
    marginBottom: 10,
    fontWeight: "bold",
    color: DarkThemeColors.onSurface
  },
  title: {
    color: DarkThemeColors.primary
  },
  content: {
    marginBottom: 10,
    color: 'darkgrey'
  },
  container: {
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: DarkThemeColors.surface
  },
});

export default CardList;