const dbPool = require('../config/database');

// GET ALL TRANSACTIONS
const getAllTransactions = () => {
  const SQLQuery = 'SELECT * FROM transactions';

  return dbPool.execute(SQLQuery);
};

// CREATE NEW TRANSACTION
const createNewTransaction = (transaction) => {
  const { user_id, created_at } = transaction;
  const SQLQuery = `INSERT INTO transactions (user_id, created_at)
                      VALUES (${user_id}, '${created_at}')`;

  return dbPool.execute(SQLQuery);
};

// UPDATE TRANSACTION BY ID
const updateTransaction = (transaction, id) => {
  const { user_id, created_at } = transaction;
  const SQLQuery = `
      UPDATE transactions
      SET user_id = ${user_id}, created_at = '${created_at}'
      WHERE id = ${id}
    `;

  return dbPool.execute(SQLQuery);
};

// GET TRANSACTION BY ID
const getTransactionById = (id) => {
  const SQLQuery = `SELECT * FROM transactions WHERE id = ${id}`;

  return dbPool.execute(SQLQuery);
};

// DELETE TRANSACTION BY ID
const deleteTransaction = (id) => {
  const SQLQuery = `DELETE FROM transactions WHERE id = ${id}`;

  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllTransactions,
  getTransactionById,
  createNewTransaction,
  updateTransaction,
  deleteTransaction,
};
