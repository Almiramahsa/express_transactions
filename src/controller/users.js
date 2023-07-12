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

const createNewUser = async (req, res) => {
  const { body } = req;
  try {
    await UsersModel.createNewUser(body);
    res.json({
      message: 'CREATE new user success',
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const [user] = await UsersModel.getUserById(id);
    if (product.length === 0) {
      return res.status(404).json({
        message: 'user not found',
      });
    }
    res.json({
      message: 'GET user by ID success',
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    await UsersModel.updateUser(body, id);
    res.json({
      message: 'UPDATE user success',
      data: { id: id, ...body },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await UsersModel.deleteUser(id);
    res.json({
      message: 'DELETE user success',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};
module.exports = {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUser,
  deleteUser,
};
