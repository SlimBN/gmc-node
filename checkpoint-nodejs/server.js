const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello Node!!!!</h1>\n');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});