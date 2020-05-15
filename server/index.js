const express = require('express');

const app = express();

app.get('**', (req, res) => {
  res.send('Hello Response');
})


app.listen(4000, () => {
  console.log('Listening to Port 4000');
});

