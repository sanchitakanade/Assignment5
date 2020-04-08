/* eslint linebreak-style: ["error", "windows"] */

import React from 'react';
import graphQLFetch from './graphQLFetch.js';
import ProductTable from './ProductTable.jsx';
import ProductAdd from './ProductAdd.jsx';

export default class ProductList extends React.Component {
  constructor() {
    super();
    this.state = { products: [] };
    this.list();
    this.createProduct = this.createProduct.bind(this);
  }

  componentDidMount() {
    this.list();
    document.forms.productAdd.Price.value = '$';
  }

  async createProduct(product) {
    const query = `mutation addProduct($product: productInputs!) {
    addProduct(product: $product) {
        id
    } 
    }`;
    const data = await graphQLFetch(query, { product });
    if (data) {
      this.list();
    }
  }

  async list() {
    const query = `query {
    productList {
        id Category Name Price
        Image
    }
    }`;
    const data = await graphQLFetch(query);
    if (data) {
      this.setState({ products: data.productList });
    }
  }

  render() {
    const { products } = this.state;
    return (
      <React.Fragment>
        <h1>My Company Inventory</h1>
        <div>Showing all available products</div>
        <hr />
        <ProductTable products={products} />
        <div>Add a new product to inventory</div>
        <hr />
        <ProductAdd createProduct={this.createProduct} />
      </React.Fragment>
    );
  }
}
