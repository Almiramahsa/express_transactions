const dbPool = require('../config/database');

const getAllUsers = () => {
  const SQLQuery = 'SELECT * FROM users';

  return dbPool.execute(SQLQuery);
};

const getUserById = (id) => {
  const SQLQuery = `SELECT * FROM users WHERE id=${id}`;

  return dbPool.execute(SQLQuery);
};

const createNewUser = (body) => {
  const SQLQuery = `INSERT INTO users (username, gender, role, email, handphone, birthdate)
                    VALUES('${body.username}', '${body.gender}', '${body.role}', '${body.email}', '${body.handphone}', '${body.birthdate}')`;

  return dbPool.execute(SQLQuery);
};

//UPDATE USER

const updateUser = (body, id) => {
  const SQLQuery = `UPDATE users 
                        SET username='${body.username}', gender='${body.gender}', role='${body.role}', email='${body.email}', handphone='${body.handphone}', birthdate='${body.birthdate}'
                        WHERE id=${id}`;

  return dbPool.execute(SQLQuery);
};

//DELETE USER
const deleteUser = (id) => {
  const SQLQuery = `DELETE FROM users WHERE id=${id}`;
  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUser,
  deleteUser,
};
