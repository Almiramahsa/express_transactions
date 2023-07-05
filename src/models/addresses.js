const dbPool = require('../config/database');

//GET ALL ADDRESSES

const getAllAddress = () => {
  const SQLQuery = 'SELECT * FROM addresses';

  return dbPool.execute(SQLQuery);
};

//CREATE NEW ADDRESS MODEL

const createNewAddress = (body) => {
  const SQLQuery = `INSERT INTO addresses (address, pinpoint, address_label, note, recipients_name, user_id)
                        VALUES('${body.address}', '${body.pinpoint}', '${body.address_label}', '${body.note}', '${body.recipients_name}' '${body.user_id}')`;

  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllAddress,
  createNewAddress,
};
