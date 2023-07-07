const dbPool = require('../config/database');

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
  const { product_name, price, description, product_image, product_id } = product;
  const SQLQuery = `INSERT INTO products (product_name, price, description, product_image, product_id)
                    VALUES('${product_name}', ${price}, '${description}', '${product_image}', ${product_id})`;

  return dbPool.execute(SQLQuery);
};

// UPDATE PRODUCT BY ID
const updateProduct = (id, updatedProduct) => {
  const { product_name, price, description, product_image, product_id } = updatedProduct;
  const SQLQuery = `UPDATE products SET 
                    product_name = '${product_name}',
                    price = ${price},
                    description = '${description}',
                    product_image = '${product_image}',
                    product_id = ${product_id}
                    WHERE id = ${id}`;

  return dbPool.execute(SQLQuery);
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
