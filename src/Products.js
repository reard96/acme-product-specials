import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({ products }) => {
  return (
    <ul>
      {
        products.map(product => {
          return (
            <li key={ product.id }>
              <Link to={ `/products/${ product.id }`}>
                { product.name }
              </Link>
            </li>
          );
        })
      }
    </ul>
  );
}

export default Products;
