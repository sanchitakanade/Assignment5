/* Name: Sanchita Kanade
   Class:CS648.02 Modern Full-Stack Web Development (Spring 2020)
   Assignment: 4
   File: App.jsx
*/

import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './ProductList.jsx';

const element = <ProductList />;
ReactDOM.render(element, document.getElementById('content'));
if (module.hot) {
  module.hot.accept();
}
