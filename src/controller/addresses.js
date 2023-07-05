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

module.exports = {
  getAllAddress,
  createNewAddress,
};
