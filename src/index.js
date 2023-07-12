require('dotenv').config();
const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');
const tokenVerify = require('./middleware/verifyToken');
const usersRoutes = require('./routes/users');
const bankRoutes = require('./routes/bank_account');
const addressessRoutes = require('./routes/addresses');
const productsRoutes = require('./routes/products');
const transactionsRoutes = require('./routes/transactions');
const transactionItemRoutes = require('./routes/transaction_item');
const authRoutes = require('./routes/user_auth');

const middlewareLogRequest = require('./middleware/log');

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    methods: ['POST', 'GET', 'PATCH', 'DELETE'],
    origin: 'http://localhost:3000',
  })
);
// Apply verifyToken middleware to all routes
app.use('/auth', authRoutes);

app.use(tokenVerify);

app.use('/users', usersRoutes);
app.use('/bank', bankRoutes);
app.use('/address', addressessRoutes);
app.use('/products', productsRoutes);
app.use('/transactions', transactionsRoutes);
app.use('/transaction_item', transactionItemRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server berhasil dijalankan di port ${PORT}`);
});
