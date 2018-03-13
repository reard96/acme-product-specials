import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ location }) => {
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
          <span>Products</span>
        ) : (
          <Link to="/products">Products</Link>
        )
      }
      </li>
    </ul>
  );
};

export default Nav;
