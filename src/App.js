import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import Nav from './Nav';
import Products from './Products';
import SpecialProducts from './SpecialProducts';
import RegularProducts from './RegularProducts';

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
          <Route component={ ({ location }) => <Nav products={ products } location={ location } />} />
          <Route exact path="/products" component={() => <Products products={ products } />} />
          <Route exact path="/special-products" component={() => <SpecialProducts products={ products } />} />
          <Route exact path="/regular-products" component={() => <RegularProducts products={ products } />} />
        </div>
      </Router>
    );
  }
}

export default App;
