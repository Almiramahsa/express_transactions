const ProductModel = require('../models/products');

//GET ALL PRODUCTS
const getAllProducts = async (req, res) => {
  try {
    const [data] = await ProductModel.getAllProducts();
    res.json({
      message: 'GET all products success',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

//CREATE NEW ADDRESS
const createNewProduct = async (req, res) => {
  const { body } = req;
  try {
    await ProductModel.createNewProduct(body);
    res.json({
      message: 'CREATE new product success',
      data: req.body,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

//UPDATE ADDRESS
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    await ProductModel.updateProduct(body, id);
    res.json({
      message: 'UPDATE product success',
      data: { id: id, ...body },
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

//DELETE PRODUCT
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await ProductModel.deleteProduct(id);
    res.json({
      message: 'DELETE product Success',
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};
module.exports = {
  getAllProducts,
  createNewProduct,
  updateProduct,
  deleteProduct,
};
