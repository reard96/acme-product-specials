const express = require('express');
const path = require('path');
const app = express();

const db = require('./db');
const { Product } = db.models;

app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/products', (req, res, next) => {
  Product.findAll()
    .then(products => res.send(products))
    .catch(next);
});

app.put('/api/products/:id', (req, res, next) => {
  Product.findById(req.params.id)
    .then(product => {
      product.isSpecial = !product.isSpecial;
      return product.save();
    })
    .then(() => {
      res.redirect('/products');
    })
    .catch(next);
});

const port = process.env.port || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));

db.sync()
  .then(() => db.seed());
