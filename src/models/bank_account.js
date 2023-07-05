const dbPool = require('../config/database');

const getAllBankAccount = () => {
  const SQLQuery = 'SELECT * FROM bank_account';

  return dbPool.execute(SQLQuery);
};

//create new bank account model

const createNewBankAccount = (body) => {
  const SQLQuery = `INSERT INTO bank_account (bank_name, account_number, holder_name, user_id)
                        VALUES('${body.bank_name}', '${body.account_number}', '${body.holder_name}', '${body.user_id}')`;

  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllBankAccount,
  createNewBankAccount,
};
