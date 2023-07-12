const TransactionsModel = require('../models/transactions');

// GET ALL TRANSACTIONS
const getAllTransactions = async (req, res) => {
  try {
    const [data] = await TransactionsModel.getAllTransactions();
    res.json({
      message: 'GET all transactions success',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

// GET TRANSACTION BY ID
const getTransactionById = async (req, res) => {
  const { id } = req.params;
  try {
    const [transaction] = await TransactionsModel.getTransactionById(id);
    if (transaction.length === 0) {
      return res.status(404).json({
        message: 'Transaction not found',
      });
    }
    res.json({
      message: 'GET transaction by ID success',
      data: transaction,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

// CREATE NEW TRANSACTION
const createNewTransaction = async (req, res) => {
  const { body } = req;
  try {
    await TransactionsModel.createNewTransaction(body);
    res.json({
      message: 'CREATE new transaction success',
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

// UPDATE TRANSACTION
const updateTransaction = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    await TransactionsModel.updateTransaction(body, id);
    res.json({
      message: 'UPDATE transaction success',
      data: { id: id, ...body },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

// DELETE TRANSACTION
const deleteTransaction = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await TransactionsModel.deleteTransaction(id);
    if (result.changedRows === 0) {
      return res.status(404).json({
        message: 'Transaction not found',
      });
    }
    res.json({
      message: 'DELETE transaction success',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllTransactions,
  getTransactionById,
  createNewTransaction,
  updateTransaction,
  deleteTransaction,
};
