const dbPool = require('../config/database');

const getAllBankAccount = () => {
  const SQLQuery = 'SELECT * FROM bank_account';

  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllBankAccount,
};
