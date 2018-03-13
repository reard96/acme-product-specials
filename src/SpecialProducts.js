import React from 'react';
import axios from 'axios';

const SpecialProducts = ({ products }) => {
  const returnProducts = products.filter(product => product.isSpecial === true);
  return (
    <div>
    <h2>Special Products:</h2>
    <h5>Click a product to make it regular</h5>
    <ul>
      {
        returnProducts.map(product => {
          return (
            <li
              key={ product.id }
              // Pretty sure I want to do something like this,
              // but I'm doing it in the wrong place
              onClick={ () => axios.put(`/api/products/${ product.id }`)
                                   .then(result => result.data)
                                   .then(product) }>
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
