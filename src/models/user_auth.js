const dbPool = require('../config/database');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;
const bcrypt = require('bcrypt');
// CREATE NEW USER AUTH
const saltRounds = 10;

const createNewUserAuth = async (userAuth) => {
  const { password, username, email, refresh_token } = userAuth;

  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);

  const SQLQuery = `INSERT INTO auth (username, email, password, refresh_token)
                    VALUES (?, ?, ?, ?)`;
  const values = [username, email, hashedPassword, refresh_token || null];

  return dbPool.execute(SQLQuery, values);
};

// GET USER AUTH BY EMAIL
const getUserAuthByEmail = async (email) => {
  const SQLQuery = `SELECT * FROM auth WHERE email = '${email}'`;
  console.log(SQLQuery);
  const [result] = await dbPool.execute(SQLQuery);
  return result[0];
};

// UPDATE AUTH DATA
const updateAuthData = (data) => {
  const { username, email, refresh_token } = data;
  const SQLQuery = `UPDATE auth SET username = '${username}', refresh_token = '${refresh_token}' WHERE email = '${email}'`;

  return dbPool.execute(SQLQuery);
};

// Generate JWT token
const generateAuthToken = (userId) => {
  const token = jwt.sign({ userId }, JWT_SECRET);
  return token;
};

// Verify JWT token
const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.userId = decoded.userId;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
// GET USER AUTH BY EMAIL OR USERNAME
const getUserAuthByEmailOrUsername = async (email, username) => {
  const SQLQuery = `SELECT * FROM auth WHERE email = '${email}' OR username = '${username}'`;

  const [result] = await dbPool.execute(SQLQuery);
  return result;
};
// GET USER AUTH BY EMAIL AND PASSWORD
const getUserAuthByEmailAndPassword = async (email, password) => {
  const SQLQuery = `SELECT * FROM auth WHERE email = '${email}' AND password = '${password}'`;
  console.log(SQLQuery);
  const [result] = await dbPool.execute(SQLQuery);
  return result[0];
};

module.exports = {
  createNewUserAuth,
  getUserAuthByEmail,
  updateAuthData,
  generateAuthToken,
  getUserAuthByEmailOrUsername,
  getUserAuthByEmailAndPassword,
};
