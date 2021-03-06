import React from 'react';

const Products = ({ products }) => {
  return (
    <div>
    <h2>All Products:</h2>
    <ul>
      {
        products.map(product => {
          return (
            <li key={ product.id }>
              { product.name }
            </li>
          );
        })
      }
    </ul>
    </div>
  );
}

export default Products;
