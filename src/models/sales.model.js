// const camelize = require('camelize');
// const snakeize = require('snakeize');
// const connection = require('./connection');

// newSale = { productId e quantity }

// const listAllSales = async () => {
//   const [result] = await connection.execute(
//     'SELECT * FROM StoreManager.sales',
//   );
//   return result;
// };

// const saleById = async (saleId) => {
//   const [[result]] = await connection.execute(
//     'SELECT * FROM StoreManager.sales WHERE id = ?',
//     [saleId],
//   );
//   return result;
// };

// const insertSaleDate = async (date) => {
//   const [result] = await connection.execute(
//     'INSERT INTO StoreManager.sales (date) VALUE ?',
//     [date],
//   );
//   return result;
// };

// const insertNewSale = async (newSale) => {
//   const columns = Object.keys(snakeize(newSale))
//     .map((key) => `${key}`)
//     .join(', ');
  
//   const placeholders = Object.keys(newSale)
//     .map((_key) => '?')
//     .join(', ');
  
//   const [{ insertId }] = await connection.execute(
//     `INSERT INTO StoreManager.sales (${columns}) VALUE (${placeholders})`,
//     [...Object.values(newSale)],
//   );
//   return insertId;
// };

// module.exports = {
//   listAllSales,
//   saleById,
//   insertNewSale,
//   insertSaleDate,
// };