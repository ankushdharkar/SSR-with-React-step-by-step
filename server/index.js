import express from 'express';
import { generatedHTML } from './renderer';

const app = express();

app.get('**', (req, res) => {
  res.send(generatedHTML());
})


app.listen(4000, () => {
  console.log('Listening to Port 4000');
});
