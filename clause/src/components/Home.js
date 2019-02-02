import React from 'react';
import axios from 'axios';
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

async function postText(inputText) {
  try {
    const { data } = await axios.post(`/messages/`, inputText);
    return data;
    // ownProps.history.push(`/messages`);
  } catch (err) {
    console.error(err);
    // ownProps.history.push(`/oops`);
  }
}

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { textToTranslate: '', translation: '' };
  }

  async handleSubmit() {
    const input = this.state.textToTranslate;
    // console.log('text', input);
    const data = await postText(input);
    console.log('text', input, data);
    this.setState({ textToTranslate: '', translation: data });
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
          <Typography
            variant="h3"
            style={{ fontFamily: 'Signika' }}
            align="center"
          >
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
            <Typography
              variant="h3"
              style={{ fontFamily: 'Signika' }}
              align="center"
            >
              Enter some stuff to translate
            </Typography>
          </CardContent>
          <CardContent align="center">
            <TextField
              id="outlined-multiline-flexible"
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
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.handleSubmit()}
            >
              Submit
            </Button>
          </CardContent>
          <CardContent>
            <Typography
              variant="h3"
              style={{ fontFamily: 'Permanent Marker' }}
              align="center"
            >
              {this.state.translation}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

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
