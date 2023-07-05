const AddressModel = require('../models/addresses');

//GET ALL BANK ACCOUNT
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

module.exports = {
  getAllAddress,
};
