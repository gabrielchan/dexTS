import React from 'react'
import CardList from '../presentation/CardList'
import MainDecoder from '../../service/MainDecoder';
import { NavigationStackScreenComponent } from 'react-navigation-stack';

const UnhelpfulThoughtsScreen: NavigationStackScreenComponent = () => {
  const thoughtsArray = MainDecoder("Unhelpful Thoughts");
  return(
    <CardList cardList={thoughtsArray}/>
  );
}

UnhelpfulThoughtsScreen.navigationOptions = {
  headerTitle: 'Unhelpful Thoughts'
}

export default UnhelpfulThoughtsScreen;