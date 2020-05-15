import React from 'react';
import AppComponent from './App';
import AllConcertsPage, { loadData } from './pages/all-concerts';

export default [
  {
    path: '/',
    component: AppComponent,
    exact: true
  },
  {
    ...AllConcertsPage,
    path: '/all-concerts'
  }
];
