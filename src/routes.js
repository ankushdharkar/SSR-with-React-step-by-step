import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppComponent from './App';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={AppComponent} />
      <Route path="/test" component={()=> 'Test Route Works'} />
    </Switch>
  )
}