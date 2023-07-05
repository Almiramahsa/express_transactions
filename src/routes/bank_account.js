const express = require('express');
const BankController = require('../controller/bank_account');
const router = express.Router();

// //CREATE - METHOD: POST
router.post('/', BankController.createNewBankAccount);

// READ - METHOD: GET
router.get('/', BankController.getAllBankAccount);

// //UPDATE - METHOD : PATCH
router.patch('/:id', BankController.updateBankAccount);

// //DELETE - METHOD : DELETE
router.delete('/:id', BankController.deleteBankAccount);

module.exports = router;
