import React from 'react';
import {
  makeStyles,
  Card, 
  CardContent,
  Typography
} from '@material-ui/core';



const Cards = ({headerText} : {headerText: string}) => {
  const matStyles = getStyles()
  return(
    <Card>
      <CardContent>
        <Typography>
          {headerText}
        </Typography>
      </CardContent>
    </Card>
  );
}

const getStyles = makeStyles({
  card: {
    minWidth: 275.
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default Cards;