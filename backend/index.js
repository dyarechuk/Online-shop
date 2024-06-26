const express = require('express');
const cors = require('cors');

const products = require('./products');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/products', (req, res) => {
  res.send(products);
});

const port = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`Server is running on port ${port}`);
});
