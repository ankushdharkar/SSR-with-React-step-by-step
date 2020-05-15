import React from 'react';
import AppComponent from './App';
import AllConcertsPage from './pages/all-concerts';

/*
export default () => {
  return (
    <Switch>
      <Route exact path="/" component={AppComponent} />
      <Route path="/all-concerts" component={AllConcertsPage} />
    </Switch>
  )
}
*/

export default [
  {
    path: '/',
    component: AppComponent,
    exact: true
  },
  {
    path: '/all-concerts',
    component: AllConcertsPage
  }
];
