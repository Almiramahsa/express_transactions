const UsersModel = require('../models/users');

// penggunaan try catch untuk mengcapture error dan menghindari kesalahan pembacaan data dari database
const getAllUsers = async (req, res) => {
  try {
    const [data] = await UsersModel.getAllUsers();
    res.json({
      message: 'GET all users success',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const createNewUser = (req, res) => {
  console.log(req.body);
  res.json({
    message: 'CREATE new user success',
    data: req.body,
  });
};

const updateUser = (req, res) => {
  console.log(req.params);
  res.json({
    message: 'UPDATE user success',
    data: req.body,
  });
};

const deleteUser = (req, res) => {
  console.log(req.params);
  res.json({
    message: 'DELETE user success',
  });
};
module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
