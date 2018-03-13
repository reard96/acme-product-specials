const express = require('express');
const path = require('path');
const app = express();

app.use('/dist', express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/products', (req, res, next) => {
  Product.findAll()
    .then(products => res.send(products))
    .catch(next);
});

const port = process.env.port || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));

const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_product_specials');

const Product = conn.define('product', {
  name: Sequelize.STRING
});

conn.sync({ force: true })
  .then(() => {
    return Promise.all([
      Product.create({ name: 'dan' }),
      Product.create({ name: 'theMan' })
    ]);
  });
