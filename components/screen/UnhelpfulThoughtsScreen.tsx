import React from 'react'
import CardList from '../presentation/CardList'
import MainDecoder from '../../service/MainDecoder';

const UnhelpfulThoughtsScreen = () => {
  const thoughtsArray = MainDecoder("Unhelpful Thoughts");
  return(
    <CardList cardList={thoughtsArray}/>
  );
}

export default UnhelpfulThoughtsScreen;