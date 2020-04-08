/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';

function ProductRow({ product }) {
  return (
    <tr>
      <td>{product.Name}</td>
      <td>{('$').concat(product.Price)}</td>
      <td>{product.Category}</td>
      <td><a href={product.Image} target="_blank" rel="noopener noreferrer">View</a></td>
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
        </tr>
      </thead>
      <tbody>
        {productrows}
      </tbody>
    </table>
  );
}
