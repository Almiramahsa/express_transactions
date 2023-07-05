const BankModel = require('../models/bank_account');

const getAllBankAccount = async (req, res) => {
  try {
    const [data] = await BankModel.getAllBankAccount();
    res.json({
      message: 'GET all bank account success',
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
  getAllBankAccount,
};
