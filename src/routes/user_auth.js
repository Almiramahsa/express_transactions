const express = require('express');
const AuthController = require('../controller/user_auth');
const router = express.Router();
const tokenVerify = require('../middleware/verifyToken');

// Middleware untuk mengurai data JSON
router.use(express.json());

// CREATE - METHOD: POST
router.post('/', tokenVerify, AuthController.createNewUserAuth);

// READ - METHOD: GET
router.get('/:email', tokenVerify, AuthController.getUserAuthByEmail);

// READ - METHOD: GET BY ID
router.get('/:id', tokenVerify, AuthController.getUserAuthByUserId);

// REGISTER
router.post('/register', AuthController.registerUser);

// LOGIN
router.post('/login', AuthController.loginUser);

module.exports = router;
