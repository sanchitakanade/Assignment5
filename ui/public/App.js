/* Name: Sanchita Kanade
   Class:CS648.02 Modern Full-Stack Web Development (Spring 2020)
   Assignment: 4
   File: App.jsx
*/

/* globals React ReactDOM */

/* eslint linebreak-style: ["error", "windows"] */
import ProductList from './ProductList.jsx';
const element = /*#__PURE__*/React.createElement(ProductList, null);
ReactDOM.render(element, document.getElementById('content'));