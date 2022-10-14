// const camelize = require('camelize');
// const snakeize = require('snakeize');
const connection = require('./connection');

// Conecta com banco de dados e lista todos os produtos
const findAllProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  // console.log(result);
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

// Insere novo valor na tabela Products coluna Name e retorna id
const setNewProduct = async (product) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUE (?)',
    [product],
  );
  console.log(insertId);
  return insertId;
};

const editProduct = async (newName, idProduct) => {
  await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?',
    [newName, idProduct],
  );
};

module.exports = {
  findAllProducts,
  findProductById,
  setNewProduct,
  editProduct,
};