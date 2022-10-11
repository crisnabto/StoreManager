// const camelize = require('camelize');
// const snakeize = require('snakeize');
const connection = require('./connection');

// Conecta com banco de dados e lista todos os produtos
const findAllProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return result;
};

// Conecta com banco de dados e pesquisa produtos por ID
const findProductById = async (productId) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [productId],
  );
  return result;
};

module.exports = {
  findAllProducts,
  findProductById,
};