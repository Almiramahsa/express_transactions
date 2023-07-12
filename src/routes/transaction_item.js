const express = require('express');
const TransactionItemController = require('../controller/transaction_item.js');
const router = express.Router();

//CREATE - METHOD: POST
router.post('/', TransactionItemController.createNewTransactionItem);

//READ - METHOD: GET
router.get('/', TransactionItemController.getAllTransactionItems);

//READ - METHOD: GET BY ID
router.get('/:id', TransactionItemController.getTransactionItemById);

//UPDATE - METHOD : PATCH
router.patch('/:id', TransactionItemController.updateTransactionItem);

//DELETE - METHOD : DELETE
router.delete('/:id', TransactionItemController.deleteTransactionItem);

module.exports = router;
