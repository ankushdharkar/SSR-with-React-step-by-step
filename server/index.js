import express from 'express';
import { generatedHTML } from './renderer';
import serverCreateStore from './store';

import { matchRoutes } from 'react-router-config';
import Routes from './../src/routes';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  const { path } = req;
  const store = serverCreateStore();

  const allMatchedRoutesArr = matchRoutes(Routes, path); // List of components to render for the path, before sending html
  
  const allLoadPromises = allMatchedRoutesArr.map( ({ route }) => {
    const { loadData } = route;
    return loadData && loadData(store);
  });

  Promise.all(allLoadPromises).then(() => {
    res.send(generatedHTML(path, store));
  });
});

app.listen(4000, () => {
  console.log('Listening to Port 4000');
});
