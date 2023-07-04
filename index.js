//1. Membuat Server di Express js

const express = require('express');

//memanggil function express
const app = express();

//project express akan menjalankan PORT 4000
app.listen(4000, () => {
  console.log('Server berhasil di running di port 4000');
});
