const productsService = require('../services/products.service');

const listProducts = async (_req, res) => {
  const { type, message } = await productsService.findAllProducts();
  return res.status(type).json(message);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const { type, message, error } = await productsService.findProductById(id);
  if (error) return res.status(type).json({ message: error });
  return res.status(type).json(message);
};

// Verifica corpo da requisicao com o nome do novo produto a cadastrar
const setNewProduct = async (req, res) => {
  const { name } = req.body;
  const { message } = await productsService.setNewProduct(name);
  return res.status(201).json(message);
};

module.exports = {
  listProducts,
  getProductById,
  setNewProduct,
};