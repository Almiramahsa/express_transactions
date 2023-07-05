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

//UPDATE BANK ACCOUNT

const updateBankAccount = (body, id) => {
  const SQLQuery = `UPDATE bank_account 
                          SET bank_name='${body.bank_name}', account_number='${body.account_number}', holder_name='${body.holder_name}', user_id='${body.user_id}'
                          WHERE id=${id}`;

  return dbPool.execute(SQLQuery);
};

//DELETE BANK ACCOUNT USER

const deleteBankAccount = (id) => {
  const SQLQuery = `DELETE FROM bank_account WHERE id=${id}`;
  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllBankAccount,
  createNewBankAccount,
  updateBankAccount,
  deleteBankAccount,
};
