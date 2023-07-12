// GET ALL TRANSACTION ITEMs
const dbPool = require('../config/database');
const { getProductById } = require('../models/products');
const { getTransactionById } = require('../models/transactions');
const { getUserById } = require('../models/users');

const getAllTransactionItems = (transactionId) => {
  const SQLQuery = `SELECT * FROM transaction_item WHERE transaction_id = ${transactionId}`;

  return dbPool.execute(SQLQuery);
};

// CREATE NEW TRANSACTION ITEM
const createNewTransactionItem = (transactionItem) => {
  const { product_id, transaction_id, user_id } = transactionItem;

  return Promise.all([getProductById(product_id), getTransactionById(transaction_id), getUserById(user_id)])
    .then(() => {
      const { total_transaction, quantity } = transactionItem;
      const SQLQuery = `INSERT INTO transaction_item (total_transaction, product_id, quantity, transaction_id, user_id)
                        VALUES (${total_transaction}, ${product_id}, ${quantity}, ${transaction_id}, ${user_id})`;

      return dbPool.execute(SQLQuery);
    })
    .catch((error) => {
      throw error;
    });
};

// UPDATE TRANSACTION ITEM BY ID
const updateTransactionItem = (transactionItem, id) => {
  const { total_transaction, product_id, quantity, transaction_id, user_id } = transactionItem;
  const SQLQuery = `
  UPDATE transaction_item
  SET total_transaction = ${total_transaction}, product_id = ${product_id}, quantity = ${quantity}, transaction_id = ${transaction_id}, user_id = ${user_id}
  WHERE id = ${id}
`;
  return dbPool.execute(SQLQuery);
};

// GET TRANSACTION ITEM BY ID
const getTransactionItemById = (id) => {
  const SQLQuery = `SELECT * FROM transaction_item WHERE id = ${id}`;

  return dbPool.execute(SQLQuery);
};

// DELETE TRANSACTION ITEM BY ID
const deleteTransactionItem = (id) => {
  const SQLQuery = `DELETE FROM transaction_item WHERE id = ${id}`;

  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllTransactionItems,
  createNewTransactionItem,
  updateTransactionItem,
  getTransactionItemById,
  deleteTransactionItem,
};
