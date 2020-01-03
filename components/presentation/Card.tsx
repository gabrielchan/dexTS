import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import {
  Card,
  Text,
} from 'react-native-elements';

export interface Props {
  headerText: string;
  content: string;
}

const Cards: React.SFC<Props> = (props) => {
  return (
    <Card
      title={props.headerText}>
      <Text style={styles.content}>
        {props.content}
      </Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  header: {

  },
  content: {
    marginBottom: 10,
  },
})

export default Cards;