import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Home, ClauseDefinition, Translation, Claws } from './components';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/def" component={ClauseDefinition} />
        <Route exact path="/Claws" component={Claws} />
        <Route exact path="/translation" component={Translation} />
      </Switch>
    );
  }
}
