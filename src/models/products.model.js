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

// Apenas faz a atualizacao da info do produto, retorna id para teste
const editProduct = async (newName, idProduct) => {
  await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?',
    [newName, idProduct],
  );
  return idProduct;
};

// Apenas faz a remocao do produto, retorna id para teste
const deleteProduct = async (idProduct) => {
  await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ?',
    [idProduct],
  );
  return idProduct;
};

// Pesquisa por termo
const searchByTerm = async (term) => {
  const [[result]] = await connection.execute(
    `SELECT * FROM StoreManager.products WHERE name LIKE '%${term}%'`,
  );
  return result;
};

module.exports = {
  findAllProducts,
  findProductById,
  setNewProduct,
  editProduct,
  deleteProduct,
  searchByTerm,
};