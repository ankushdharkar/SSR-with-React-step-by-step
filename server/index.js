import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import AppComponent from './../src/App';

const app = express();

app.get('**', (req, res) => {
  const content = renderToString(<AppComponent />);
  res.send(content);
})


app.listen(4000, () => {
  console.log('Listening to Port 4000');
});
