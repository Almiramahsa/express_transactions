const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  jwt.verify(token, JWT_SECRET, function (err, decoded) {
    if (err) {
      return res.status(403).json({ message: err.message });
    }

    req.user = {
      id: decoded.id,
      username: decoded.username,
      email: decoded.email,
    };

    return next();
  });
};
