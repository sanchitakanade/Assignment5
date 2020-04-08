/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';

export default class ProductAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const form = document.forms.productAdd;
    const price = form.Price.value;
    const newPrice = price.substr(1, price.length);
    e.preventDefault();
    const product = {
      Category: form.Category.value,
      Price: newPrice,
      Name: form.Name.value,
      Image: document.getElementById('image').value,
    };
    const { createProduct } = this.props;
    createProduct(product);
    form.Category.value = 'Shirts';
    form.Price.value = '$';
    form.Name.value = '';
    form.Image.value = '';
  }

  render() {
    return (
      <form name="productAdd" onSubmit={this.handleSubmit}>
        <span>
          <label htmlFor="productCategory">
            Category
            <select name="Category" id="productCategory">
              <option>Shirts</option>
              <option>Jeans</option>
              <option>Jackets</option>
              <option>Sweaters</option>
              <option>Accessories</option>
            </select>
          </label>
          <label htmlFor="name">
            Product Name
            <input type="text" name="Name" id="name" />
          </label>
        </span>
        <span>
          <label htmlFor="price">
            Price Per Unit
            <input type="text" name="Price" id="price" />
          </label>
          <label htmlFor="image">
            Image URL
            <input type="url" name="Image" id="image" />
          </label>
        </span>
        <button type="submit">Add Product</button>
      </form>
    );
  }
}
