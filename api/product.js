/* eslint linebreak-style: ["error", "windows"] */
const { getDb, getNextSequence } = require('./db.js');

// API to retrieve product
async function list() {
  const db = getDb();
  const products = await db.collection('inventory').find({}).toArray();
  return products;
}

// API to add product
async function add(_, { product }) {
  const db = getDb();
  const newProduct = Object.assign({}, product);
  newProduct.id = await getNextSequence('productsConter');
  const result = await db.collection('inventory').insertOne(newProduct);
  const savedProduct = await db.collection('inventory')
    .findOne({ _id: result.insertedId });
  return savedProduct;
}

module.exports = { add, list };
