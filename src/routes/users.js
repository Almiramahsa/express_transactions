const express = require('express');
const UserController = require('../controller/users');
const router = express.Router();

//CREATE - METHOD: POST
router.post('/', UserController.createNewUser);

//READ - METHOD: GET
router.get('/', UserController.getAllUsers);

//UPDATE - METHOD : PATCH
router.patch('/:id', UserController.updateUser);

//DELETE - METHOD : DELETE
router.delete('/:id', UserController.deleteUser);

module.exports = router;
