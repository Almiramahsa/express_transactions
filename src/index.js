require('dotenv').config();
const PORT = process.env.PORT || 5000;

const express = require('express');

//export file users
const usersRoutes = require('./routes/users');
const bankRoutes = require('./routes/bank_account');
const addressRoutes = require('./routes/addresses');

const middlewareLogRequest = require('./middleware/log');

const app = express();

//middleware req Log Request
app.use(middlewareLogRequest);

//middleware req body json
app.use(express.json());

//patern routing di express = app.method(path, handler)
//grouping per routes
app.use('/users', usersRoutes);
app.use('/bank', bankRoutes);
app.use('/address', addressRoutes);

//project express akan menjalankan PORT 4000
app.listen(PORT, () => {
  console.log(`Server berhasil di running di port ${PORT}`);
});
