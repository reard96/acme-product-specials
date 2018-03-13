import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ location, products }) => {
  const path = location.pathname;
  return (
    <ul>
      <li>
      {
        path === '/' ? (
          <span>Home</span>
        ) : (
          <Link to="/">Home</Link>
        )
      }
      </li>
      <li>
      {
        path === '/products' ? (
          <span>Products: { products.length }</span>
        ) : (
          <Link to="/products">Products: { products.length }</Link>
        )
      }
      </li>
    </ul>
  );
};

export default Nav;
