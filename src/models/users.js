const dbPool = require('../config/database');

const getAllUsers = () => {
  const SQLQuery = 'SELECT * FROM users';

  return dbPool.execute(SQLQuery);
};

const createNewUser = (body) => {
  const SQLQUery = `INSERT INTO users (username, gender, role, email, handphone, birthdate)
                    VALUES('${body.username}', '${body.gender}', '${body.role}', '${body.email}', '${body.handphone}', '${body.birthdate}')`;

  return dbPool.execute(SQLQUery);
};
module.exports = {
  getAllUsers,
  createNewUser,
};
