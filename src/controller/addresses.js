const AddressModel = require('../models/addresses');

//GET ALL ADDRESS
const getAllAddress = async (req, res) => {
  try {
    const [data] = await AddressModel.getAllAddress();
    res.json({
      message: 'GET all address success',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

//CREATE NEW ADDRESS
const createNewAddress = async (req, res) => {
  const { body } = req;
  try {
    await AddressModel.createNewAddress(body);
    res.json({
      message: 'CREATE new address success',
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

//UPDATE ADDRESS
const updateAddress = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    await AddressModel.updateAddress(body, id);
    res.json({
      message: 'UPDATE Address success',
      data: { id: id, ...body },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

//DELETE ADDRESS
const deleteAddress = async (req, res) => {
  const { id } = req.params;
  try {
    await AddressModel.deleteAddress(id);
    res.json({
      message: 'DELETE Address Success',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};
module.exports = {
  getAllAddress,
  createNewAddress,
  updateAddress,
  deleteAddress,
};
