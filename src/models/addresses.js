const dbPool = require('../config/database');

//GET ALL ADDRESSES

const getAllAddress = () => {
  const SQLQuery = 'SELECT * FROM addresses';

  return dbPool.execute(SQLQuery);
};

//CREATE NEW ADDRESS MODEL

const createNewAddress = (body) => {
  const SQLQuery = `INSERT INTO addresses (address, pinpoint, address_label, note, recipients_name, user_id)
                        VALUES('${body.address}', '${body.pinpoint}', '${body.address_label}', '${body.note}', '${body.recipients_name}', '${body.user_id}')`;

  return dbPool.execute(SQLQuery);
};

//UPDATE ADDRESS

const updateAddress = (body, id) => {
  const SQLQuery = `UPDATE addresses 
                          SET address='${body.address}', pinpoint='${body.pinpoint}', address_label='${body.address_label}',note='${body.note}',recipients_name='${body.recipients_name}', user_id='${body.user_id}'
                          WHERE id=${id}`;

  return dbPool.execute(SQLQuery);
};

//DELETE ADDRESS

const deleteAddress = (id) => {
  const SQLQuery = `DELETE FROM addresses WHERE id=${id}`;
  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllAddress,
  createNewAddress,
  deleteAddress,
  updateAddress,
};
