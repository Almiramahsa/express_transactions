const express = require('express');
const AddressController = require('../controller/addresses');
const router = express.Router();

// //CREATE - METHOD: POST
router.post('/', AddressController.createNewAddress);

// READ - METHOD: GET
router.get('/', AddressController.getAllAddress);

// // //UPDATE - METHOD : PATCH
// router.patch('/:id', BankController.updateBankAccount);

// // //DELETE - METHOD : DELETE
// router.delete('/:id', BankController.deleteBankAccount);

module.exports = router;
