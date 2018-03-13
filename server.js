const express = require('express');
const path = require('path');
const app = express();
const faker = require('faker');

const db = require('./db');
const { Product } = db.models;

app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/products', (req, res, next) => {
  Product.findAll()
    .then(products => res.send(products))
    .catch(next);
});

app.post('/api/products', (req, res, next) => {
  Product.create({ name: faker.commerce.productName() })
    .then(product => res.send(product))
    .catch(next);
});

const port = process.env.port || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));

db.sync()
  .then(() => db.seed());
