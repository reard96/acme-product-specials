import React from 'react';

const RegularProducts = ({ products }) => {
  const returnProducts = products.filter(product => product.isSpecial === false);
  return (
    <div>
    <h2>Regular Products:</h2>
    <ul>
      {
        returnProducts.map(product => {
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

export default RegularProducts;
