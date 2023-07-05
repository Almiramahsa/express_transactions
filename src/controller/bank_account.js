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

//UPDATE BANK ACCOUNT
const updateBankAccount = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    await BankModel.updateBankAccount(body, id);
    res.json({
      message: 'UPDATE bank account success',
      data: { id: id, ...body },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

//DELETE BANK ACCOUNT
const deleteBankAccount = async (req, res) => {
  const { id } = req.params;
  try {
    await BankModel.deleteBankAccount(id);
    res.json({
      message: 'DELETE Bank Account Success',
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
  updateBankAccount,
  deleteBankAccount,
};
