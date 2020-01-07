import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';

const navigationOptions = {
  title: 'SplashView',
};

interface Props {
  navigation: any;
  navigationOptions?: Object;
}

const SplashView: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Values</Text>
        <Text>Empathy, Honesty, Respect, and Curiosity</Text>
        <Text style={styles.title}>Value-Driven Commandments</Text>
        <Text>
          1. [Honesty] Love oneself{'\n'}
          2. [Curiosity] Enjoy the Journey {'\n'}
          3. [Respect] Alone time is an opportunity to grow{'\n'}
          4. [Empathy] Feel ones feelings and address them healthily{'\n'}
        </Text>
        <Text style={styles.title}>Why Am I Walking Down this Path?</Text>
        <Text>
          After a tough but triumphant 2019 year, I've come to realize that I want to center my life around the four key values.
          With work, I have decided to <Text style={{fontWeight: 'bold'}}> become a Developer</Text> because I've always had a
          curiosity to Mathematics and problems. This application represents:{'\n'}
          1. My <Text style={{fontWeight: 'bold'}}>curiosity</Text> for knowledge{'\n'}
          2. Being <Text style={{fontWeight: 'bold'}}>honest</Text> to myself about my capabilities in light of other's opinions{'\n'}
          3. <Text style={{fontWeight: 'bold'}}>Empathsizing</Text> with my desires to look out for my best interest{'\n'}
          4. <Text style={{fontWeight: 'bold'}}>Respecting</Text> and loving myself
          5. My <Text style={{fontWeight: 'bold'}}>independence</Text> and learning how to take care of myself
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Test Button"
          onPress={() => Alert.alert('Button Press Successful')}
        />
        <Button
          title="Go to CardList"
          onPress={() => props.navigation.navigate('CardList')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  textContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  title: {
    fontSize: 30
  },
});

export default SplashView;