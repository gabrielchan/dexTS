import React from 'react';
import {
  observer
} from 'mobx-react';
import {
  decorate
} from 'mobx'
import {
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';
import CounterStore from './Counter';

type Props = {
  count: number;
}

type State = {
  count?: number;
}

class PlusMinusView extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{CounterStore.counter}</Text>
        <Button
          title="+"
          onPress={() => CounterStore.increment()}
        />
        <Button
          title="-"
          onPress={() => CounterStore.decrement()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
})

export default (observer(PlusMinusView));