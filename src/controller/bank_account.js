const BankModel = require('../models/bank_account');

//GET ALL BANK ACCOUNT
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

//CREATE NEW BANK ACCOUNT
const createNewBankAccount = async (req, res) => {
  const { body } = req;
  try {
    await BankModel.createNewBankAccount(body);
    res.json({
      message: 'CREATE new bank account success',
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
  getAllBankAccount,
  createNewBankAccount,
};
