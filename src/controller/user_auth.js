const UserAuthModel = require('../models/user_auth');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { JWT_SECRET, JWT_ACCESS_TOKEN_EXPIRED, JWT_REFRESH_TOKEN_EXPIRED, JWT_SECRET_REFRESH_TOKEN } = process.env;
const { generateRefreshToken } = require('./refreshToken');

// CREATE NEW USER AUTH
const createNewUserAuth = async (req, res) => {
  const { body } = req;

  try {
    const { password, username, email } = body;

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    await UserAuthModel.createNewUserAuth({
      username: username,
      email: email,
      password: hashPassword,
    });

    res.json({
      message: 'CREATE new User Auth success',
      data: body,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error.message,
    });
  }
};

// GET USER AUTH BY USER ID
const getUserAuthByUserId = async (req, res) => {
  try {
    const { user_id } = req.params;
    const userAuth = await UserAuthModel.getUserAuthByUserId(user_id);
    if (userAuth.length === 0) {
      return res.status(404).json({
        message: 'User authentication not found',
      });
    }
    res.json({
      message: 'GET user authentication by ID success',
      data: userAuth,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error.message,
    });
  }
};

// GET USER AUTH BY EMAIL
const getUserAuthByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const userAuth = await UserAuthModel.getUserAuthByEmail(email);
    if (!userAuth) {
      return res.status(404).json({
        message: 'Email authentication not found',
      });
    }
    res.json({
      message: 'GET email authentication success',
      data: userAuth,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error.message,
    });
  }
};

// LOGIN USER
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserAuthModel.getUserAuthByEmail(email);

    if (!user) {
      return res.status(400).json({ message: 'Email or password is incorrect' });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (isPasswordMatch) {
      const { id, username } = user;
      const accessToken = jwt.sign({ id, username, email }, JWT_SECRET, {
        expiresIn: JWT_ACCESS_TOKEN_EXPIRED,
      });

      const refreshToken = jwt.sign({ id, username, email }, JWT_SECRET_REFRESH_TOKEN, {
        expiresIn: JWT_REFRESH_TOKEN_EXPIRED,
      });
      await UserAuthModel.updateAuthData({ username, email, refresh_token: refreshToken });

      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      });

      return res.json({ message: 'Login Success!', accessToken, refreshToken });
    } else {
      return res.status(400).json({ message: 'Email or password is incorrect' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// REGISTER USER
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!password) {
      return res.status(400).json({ message: 'Password is required' });
    }

    const existingUser = await UserAuthModel.getUserAuthByEmailOrUsername(email, username);

    if (existingUser.length > 0) {
      const duplicateFields = [];
      if (existingUser.find((user) => user.email === email)) {
        duplicateFields.push('Email');
      }
      if (existingUser.find((user) => user.username === username)) {
        duplicateFields.push('Username');
      }

      return res.status(400).json({
        message: 'Username or Email already registered!',
      });
    }

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    const authResult = await UserAuthModel.createNewUserAuth({
      username: username,
      email: email,
      password: hashPassword,
    });

    // Dapatkan `insertId` dari `authResult`
    const { insertId } = authResult;

    // Simpan data pengguna ke dalam tabel `users` dengan menggunakan `user_id` dari tabel `auth`
    await UsersModel.createNewUser({
      username: username,
      email: email,
      user_id: insertId,
      // Tambahkan data lain yang ingin Anda simpan ke dalam tabel `users`
    });

    res.json({ message: 'Registration successful' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  createNewUserAuth,
  generateRefreshToken,
  getUserAuthByEmail,
  getUserAuthByUserId,
  loginUser,
  registerUser,
};
