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

// Verifica o id do novo produto cadastrado e retorna codigo e mensagem
const setNewProduct = async (product) => {
  const idProduct = await productsModel.setNewProduct(product);
  const result = await productsModel.findProductById(idProduct);
  return { type: null, message: result };
};

// Verifica o id do produto editado e retorna produto editado
const editProduct = async (newName, idProduct) => {
  await productsModel.editProduct(newName, idProduct);
  const result = await productsModel.findProductById(idProduct);
  return { type: 200, message: result };
};

// Verifica se o id do produto existe e deleta caso exista
const deleteProduct = async (idProduct) => {
  const findDeletedProduct = await productsModel.findProductById(idProduct);
  if (!findDeletedProduct) return { type: 404, error: 'Product not found' };
  await productsModel.deleteProduct(idProduct);
  return { type: 204 };
};

module.exports = {
  findAllProducts,
  findProductById,
  setNewProduct,
  editProduct,
  deleteProduct,
};