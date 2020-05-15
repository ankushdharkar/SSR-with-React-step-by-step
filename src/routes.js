import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AppComponent from './App';
import AllConcertsPage from './pages/all-concerts';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={AppComponent} />
      <Route path="/all-concerts" component={AllConcertsPage} />
    </Switch>
  )
}