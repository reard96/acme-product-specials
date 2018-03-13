import React from 'react';

const Product = ({ match, products }) => {
  const product = products.find(product => product.id === match.params.id * 1);
  return (
    product &&
      <h1>
        { product.name }
      </h1>
  );
};

export default Product;
