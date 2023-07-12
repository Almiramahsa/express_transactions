const TransactionItemModel = require('../models/transaction_item');

// GET ALL TRANSACTION ITEMS
const getAllTransactionItems = async (req, res) => {
  try {
    const [data] = await TransactionItemModel.getAllTransactionItems();
    res.json({
      message: 'GET all transaction items success',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

// GET TRANSACTION ITEM BY ID
const getTransactionItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const [transactionItem] = await TransactionItemModel.getTransactionItemById(id);
    if (transactionItem.length === 0) {
      return res.status(404).json({
        message: 'Transaction item not found',
      });
    }
    res.json({
      message: 'GET transaction item by ID success',
      data: transactionItem,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

// CREATE NEW TRANSACTION ITEM
const createNewTransactionItem = async (req, res) => {
  const { body } = req;
  try {
    await TransactionItemModel.createNewTransactionItem(body);
    res.json({
      message: 'CREATE new transaction item success',
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

// UPDATE TRANSACTION ITEM
const updateTransactionItem = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    await TransactionItemModel.updateTransactionItem(body, id);
    res.json({
      message: 'UPDATE transaction item success',
      data: { id: id, ...body },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

// DELETE TRANSACTION ITEM
const deleteTransactionItem = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await TransactionItemModel.deleteTransactionItem(id);
    if (result.changedRows === 0) {
      return res.status(404).json({
        message: 'Transaction item not found',
      });
    }
    res.json({
      message: 'DELETE transaction item success',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

module.exports = {
  getAllTransactionItems,
  getTransactionItemById,
  createNewTransactionItem,
  updateTransactionItem,
  deleteTransactionItem,
};
