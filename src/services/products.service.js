const productsModel = require('../models/products.model');

// Verifica se os produtos sao encontrados e retorna codigo e mensagem
const findAllProducts = async () => {
  const products = await productsModel.findAllProducts();
  return { type: 200, message: products };
};

// Verifica se os produtos sao encontrados e retorna codigo e mensagem
const findProductById = async (productId) => {
  const productById = await productsModel.findProductById(productId);
  if (productById) return { type: 200, message: productById };
  return { type: 404, error: 'Product not found' };
};

module.exports = {
  findAllProducts,
  findProductById,
};