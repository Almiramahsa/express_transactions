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
//GET PRODUCT BY ID

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const [product] = await ProductModel.getProductById(id);
    if (product.length === 0) {
      return res.status(404).json({
        message: 'Product not found',
      });
    }
    res.json({
      message: 'GET product by ID success',
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

//CREATE NEW PRODUCT
const createNewProduct = async (req, res) => {
  const { body } = req;
  try {
    await ProductModel.createNewProduct(body);
    res.json({
      message: 'CREATE new product success',
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
};

//UPDATE PRODUCT
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
    const result = await ProductModel.deleteProduct(id);
    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: 'Product not found',
      });
    }
    res.json({
      message: 'DELETE product success',
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
  getProductById,
  createNewProduct,
  updateProduct,
  deleteProduct,
};
