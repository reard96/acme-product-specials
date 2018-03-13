const conn = require('./conn');
const Product = require('./Product');

const initialProducts = [
  { name: 'hammer', isSpecial: false },
  { name: 'anvil', isSpecial: true },
  { name: 'wrench', isSpecial: false },
  { name: 'screwdriver', isSpecial: true },
  { name: 'pliers', isSpecial: false }
];

const sync = () => {
  return conn.sync({ force: true });
};

const seed = () => {
  Promise.all(initialProducts.map(product => Product.create(product)));
};

module.exports = {
  models: {
    Product
  },
  sync,
  seed
};
