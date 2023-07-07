require('dotenv').config();
// import cors from 'cors';
// import session from 'express-session';
const PORT = process.env.PORT || 5000;

const express = require('express');

//export file users
const usersRoutes = require('./routes/users');
const bankRoutes = require('./routes/bank_account');
const addressRoutes = require('./routes/addresses');
const productsRoutes = require('./routes/products');

const middlewareLogRequest = require('./middleware/log');

const app = express();

//middleware req Log Request
app.use(middlewareLogRequest);

//middleware req body json
app.use(express.json());

// //middleware CORS
// app.use(
//   cors({
//     credentials: true,
//     origin: 'http://localhost:3000',
//   })
// );

//Middleware session
//Middleware session digunakan untuk menyimpan data sesi pengguna antara permintaan dan tanggapan
// app.use(
//   session({
//     secret: process.env.SESS_SECRET,
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//       secure: 'auto',
//     },
//   })
// );
//patern routing di express = app.method(path, handler)
//grouping per routes
app.use('/users', usersRoutes);
app.use('/bank', bankRoutes);
app.use('/address', addressRoutes);
app.use('/products', productsRoutes);

//project express akan menjalankan PORT 4000
app.listen(PORT, () => {
  console.log(`Server berhasil di running di port ${PORT}`);
});
