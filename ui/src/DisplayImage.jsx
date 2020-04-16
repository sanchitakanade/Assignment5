/* Name: Sanchita Kanade
   Class:CS648.02 Modern Full-Stack Web Development (Spring 2020)
   Assignment: 5
   File: DisplayImage.jsx
*/

/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import { images } from './ProductTable.jsx';

export default function displayImage({ match }) {
  const { id } = match.params;
  return (
    <img src={images[id]} alt="" />
  );
}
