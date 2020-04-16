/* Name: Sanchita Kanade
   Class:CS648.02 Modern Full-Stack Web Development (Spring 2020)
   Assignment: 5
   File: ProductTable.jsx
*/

/* eslint linebreak-style: ["error", "windows"] */
// <td><a href={product.Image} target="_blank" rel="noopener noreferrer">View</a></td>

import React from 'react';

export const images = [];
function ProductRow({ product }) {
  images[product.id] = product.Image;
  return (
    <tr>
      <td>{product.Name}</td>
      <td>{('$').concat(product.Price)}</td>
      <td>{product.Category}</td>
      <td><a href={`/#/view/${product.id}`}>View</a></td>
      <td><a href={`/#/edit/${product.id}`}>Edit</a></td>
    </tr>
  );
}

export default function ProductTable({ products }) {
  const productrows = products.map(product => (<ProductRow key={product.id} product={product} />));
  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Image</th>
          <th>Modify</th>
        </tr>
      </thead>
      <tbody>
        {productrows}
      </tbody>
    </table>
  );
}
