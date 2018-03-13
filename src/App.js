/* eslint-disable */
import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

const Home = () => <div>Home</div>;

const Products = () => <div>Products</div>;

import Nav from './Nav';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    axios.get('api/products')
      .then(result => result.data)
      .then(products => this.setState({ products }));
  }
  render() {
    const { products } = this.state;
    return (
      <Router>
        <div>
          <Route component={ Nav } />
          <Route exact path="/" component={ Home } />
          <Route path="/products" component={ Products } />
          We have { products.length } products.
        </div>
      </Router>
    );
  }
}

export default App;
