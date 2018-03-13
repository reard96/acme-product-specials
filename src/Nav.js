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
          <span>View all { products.length } of our products</span>
        ) : (
          <Link to="/products">View all { products.length } of our products</Link>
        )
      }
      </li>
      <li>
      {
        path === '/special-products' ? (
          <span>View our special products</span>
        ) : (
          <Link to="/special-products">View our special products</Link>
        )
      }
      </li>
      <li>
      {
        path === '/regular-products' ? (
          <span>View our regular products</span>
        ) : (
          <Link to="/regular-products">View our regular products</Link>
        )
      }
      </li>
    </ul>
  );
};

export default Nav;
