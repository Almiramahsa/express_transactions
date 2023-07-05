const dbPool = require('../config/database');

//GET ALL ADDRESSES

const getAllAddress = () => {
  const SQLQuery = 'SELECT * FROM addresses';

  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllAddress,
};
