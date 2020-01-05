import React from 'react';
import {
  View, 
  Text,
} from 'react-native';

export interface Props {
  header: string,
}

const Splash: React.FC<Props> = (props) => {
  return(
    <View>
      <Text>{props.header}</Text>
    </View>
  );
}

export default Splash;