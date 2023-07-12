const Auth = require('../models/user_auth');
const jwt = require('jsonwebtoken');

const { JWT_SECRET, JWT_ACCESS_TOKEN_EXPIRED, JWT_REFRESH_TOKEN_EXPIRED } = process.env;

const generateRefreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.sendStatus(401);
    }

    const auth = await Auth.findOne({
      where: {
        refresh_token: refreshToken,
      },
    });

    if (!auth) {
      return res.sendStatus(403);
    }

    jwt.verify(refreshToken, JWT_REFRESH_TOKEN_EXPIRED, (err, decoded) => {
      if (err) {
        return res.sendStatus(403);
      }

      const { id, username, email } = auth;

      const accessToken = jwt.sign({ id, username, email }, JWT_SECRET, {
        expiresIn: JWT_ACCESS_TOKEN_EXPIRED,
      });

      res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      });

      // Set the refresh token as a response header
      res.setHeader('refreshToken', refreshToken);

      // Return the access token
      res.json({ accessToken });
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

module.exports = { generateRefreshToken };
