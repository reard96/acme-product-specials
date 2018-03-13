import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

const Home = () => <div>Home</div>;

import Nav from './Nav';
import Products from './Products';
import Product from './Product';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
    this.createProduct = this.createProduct.bind(this);
  }

  componentDidMount() {
    axios.get('api/products')
      .then(result => result.data)
      .then(products => this.setState({ products }));
  }

  createProduct() {
    axios.post('/api/products')
      .then(result => result.data)
      .then(product => this.setState({ products: [ ...this.state.products, product ]}));
  }

  render() {
    const { products } = this.state;
    const { createProduct } = this;
    return (
      <Router>
        <div>
          <button onClick={ createProduct }>Create Product</button>
          <Route component={ ({ location }) => <Nav products={ products } location={ location } />} />
          <Route exact path="/" component={ Home } />
          <Route exact path="/products" component={() => <Products products={ products } />} />
          <Route path="/products/:id" component={({ match }) => <Product match={ match } products={ products } />} />
          We have { products.length } products.
        </div>
      </Router>
    );
  }
}

export default App;
