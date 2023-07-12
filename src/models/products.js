const dbPool = require('../config/database');
const upload = require('../middleware/upload');

// GET ALL PRODUCTS
const getAllProducts = () => {
  const SQLQuery = 'SELECT * FROM products';

  return dbPool.execute(SQLQuery);
};

// GET PRODUCT BY ID
const getProductById = (id) => {
  const SQLQuery = `SELECT * FROM products WHERE id = ${id}`;

  return dbPool.execute(SQLQuery);
};

// CREATE NEW PRODUCT
const createNewProduct = (product) => {
  const { product_name, price, description } = product;
  const SQLQuery = `INSERT INTO products (product_name, price, description, product_image)
                    VALUES ('${product_name}', ${price}, '${description}', ?)`;

  return new Promise((resolve, reject) => {
    upload.single('product_image')(req, res, (err) => {
      if (err) {
        reject(err);
      } else {
        const product_image = req.file.filename;
        dbPool
          .execute(SQLQuery, [product_image])
          .then((result) => resolve(result))
          .catch((error) => reject(error));
      }
    });
  });
};

// UPDATE PRODUCT BY ID
const updateProduct = (product, id) => {
  const { product_name, price, description } = product;
  const SQLQuery = `
    UPDATE products
    SET product_name = '${product_name}', price = ${price}, description = '${description}', product_image = ?
    WHERE id = ${id}
  `;

  return new Promise((resolve, reject) => {
    upload.single('product_image')(req, res, (err) => {
      if (err) {
        reject(err);
      } else {
        const product_image = req.file ? req.file.filename : null;
        dbPool
          .execute(SQLQuery, [product_image])
          .then((result) => resolve(result))
          .catch((error) => reject(error));
      }
    });
  });
};

module.exports = {
  updateProduct,
};

// DELETE PRODUCT BY ID
const deleteProduct = (id) => {
  const SQLQuery = `DELETE FROM products WHERE id = ${id}`;

  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProduct,
  deleteProduct,
};
