import React from 'react';
import {
  StyleSheet,
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

const Cards: React.SFC<CardItems> = (props) => {
  return (
    <Card
      title={props.header}>
      <Text style={styles.content}>
        {props.content}
      </Text>
      <Text style={styles.subcontent}>
        {props.subcontent}
      </Text>
    </Card>
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
  }
})

export default Cards;