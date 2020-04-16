/* Name: Sanchita Kanade
   Class:CS648.02 Modern Full-Stack Web Development (Spring 2020)
   Assignment: 5
   File: ProductEdit.jsx
*/

/* eslint linebreak-style: ["error", "windows"] */

import React from 'react';
import graphQLFetch from './graphQLFetch.js';

export default class ProductEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    const { match: { params: { id: prevId } } } = prevProps;
    const { match: { params: { id } } } = this.props;
    if (id !== prevId) {
      this.loadData();
    }
  }

  onChange(event) {
    const { name, value } = event.target;
    this.setState(prevState => ({
      product: { ...prevState.product, [name]: value },
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const { product } = this.state;
    console.log(product); // eslint-disable-line no-console
  }

  async loadData() {
    const query = `query product($id: Int!) {
      product(id: $id) {
      id Category Name Price
      Image
      }
    }`;

    const { match: { params: { id } } } = this.props;
    const data = await graphQLFetch(query, { id });

    if (data) {
      const { product } = data;
      product.Category = product.Category != null ? product.Category.toString() : '';
      product.Name = product.Name != null ? product.Name : '';
      product.Image = product.Image != null ? product.Image : '';
      product.Price = product.Price != null ? product.Price.toString() : '';
      this.setState({ product });
    } else {
      this.setState({ product: {} });
    }
  }

  render() {
    const { product: { id } } = this.state;
    const { match: { params: { id: propsId } } } = this.props;
    if (id == null) {
      if (propsId != null) {
        return <h3>{`Issue with ID ${propsId} not found.`}</h3>;
      }
      return null;
    }
    const { product: { Name, Category } } = this.state;
    const { product: { Image, Price } } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>{`Editing product: ${id}`}</h3>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>
                <input
                  name="Name"
                  value={Name}
                  onChange={this.onChange}
                />
              </td>
            </tr>
            <tr>
              <td>Category:</td>
              <td>
                <select name="Category" value={Category} onChange={this.onChange}>
                  <option>Shirts</option>
                  <option>Jeans</option>
                  <option>Jackets</option>
                  <option>Sweaters</option>
                  <option>Accessories</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Price:</td>
              <td>
                <input
                  name="Price"
                  value={Price}
                  onChange={this.onChange}
                />
              </td>
            </tr>
            <tr>
              <td>Image:</td>
              <td>
                <input
                  name="Image"
                  value={Image}
                  onChange={this.onChange}
                />
              </td>
            </tr>
            <tr>
              <td />
              <td><button type="submit">Submit</button></td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  }
}
