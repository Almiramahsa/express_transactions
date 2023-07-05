const express = require('express');
const BankController = require('../controller/bank_account');
const router = express.Router();

// //CREATE - METHOD: POST
router.post('/', BankController.createNewBankAccount);

// READ - METHOD: GET
router.get('/', BankController.getAllBankAccount);

// //UPDATE - METHOD : PATCH
// router.patch('/:id', UserController.updateUser);

// //DELETE - METHOD : DELETE
// router.delete('/:id', UserController.deleteUser);

module.exports = router;
