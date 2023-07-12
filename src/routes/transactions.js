const express = require('express');
const TransactionController = require('../controller/transactions');
const router = express.Router();

//CREATE - METHOD: POST
router.post('/', TransactionController.createNewTransaction);

//READ - METHOD: GET
router.get('/', TransactionController.getAllTransactions);

//READ - METHOD: GET BY ID
router.get('/:id', TransactionController.getTransactionById);

//UPDATE - METHOD : PATCH
router.patch('/:id', TransactionController.updateTransaction);

//DELETE - METHOD : DELETE
router.delete('/:id', TransactionController.deleteTransaction);

module.exports = router;
