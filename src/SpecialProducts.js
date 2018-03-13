import React from 'react';

const SpecialProducts = ({ products }) => {
  const returnProducts = products.filter(product => product.isSpecial === true);
  return (
    <div>
    <h2>Special Products:</h2>
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

export default SpecialProducts;
