import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  media: {
    objectFit: 'cover'
  }
};

export default class Claws extends React.Component {
  render() {
    return (
      <Card
        style={{
          float: 'none',
          width: '55%',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
      >
        {' '}
        <Typography
          variant="h3"
          style={{ fontFamily: 'Signika' }}
          align="center"
        >
          Translatation
        </Typography>
        <CardMedia
          component="img"
          image="https://cdn141.picsart.com/271471483023201.png?c480x480"
          title="home"
        />
        <CardContent>
          <Typography variant="h3" style={{ fontFamily: 'Signika' }}>
            Claws
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
