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
import TextField from '@material-ui/core/TextField';
const styles = theme => ({
  card: {
    maxWidth: 345,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  media: {
    objectFit: 'cover'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  }
});

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { textToTranslate: '' };
  }

  handleSubmit() {
    console.log('text');
    const self = this;

    self.setState({ multiline: '' });
    //onbutton press send the text to hashing function
  }
  render() {
    return (
      <div>
        <Card
          style={{
            float: 'none',
            width: '55%',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          {' '}
          <Typography variant="display3" align="center">
            Let's Hash it out!
          </Typography>
          <CardMedia
            component="img"
            image="https://cdn101.picsart.com/207085903000201.jpg?r1024x1024"
            title="home"
          />
        </Card>
        <Card
          style={{
            float: 'none',
            width: '55%',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
        >
          <CardContent>
            <Typography variant="display3" align="center">
              Enter some stuff to translate
            </Typography>
          </CardContent>
          <CardContent align="center">
            <TextField
              id="outlined-multiline-flexible"
              // label="Enter Text Here:"
              // multiline
              rowsMax="4"
              classes={{
                root: styles.inputRoot,
                input: styles.inputInput
              }}
              value={this.state.textToTranslate}
              onChange={event =>
                this.setState({ textToTranslate: event.target.value })
              }
              margin="normal"
              variant="outlined"
              centered
            />
          </CardContent>
          <CardContent align="center">
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
}
