import React from 'react'
import CardList from '../presentation/CardList';
import testData from '../../test_data/sampleCardData.json';

const CardListScreen = () => {
  return(
    <CardList cardList={testData}/>
  );
}

export default CardListScreen;