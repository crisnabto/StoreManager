// const salesModel = require('../models/sales.model');

// const listAllSales = async () => {
//   const sales = await salesModel.listAllSales();
//   if (sales.length === 0) return ({ type: 404, message: 'not found' });
//   return ({ type: 200, message: sales });
// };

// const saleById = async (saleId) => {
//   const sale = await salesModel.saleById(saleId);
//   if (sale) return { type: 200, message: sale };
//   return { type: 404, error: 'Sale not found' };
// };

// const insertSaleDate = async (date) => {
//   const saleId = await salesModel.insertSaleDate(date);
//   const result = await salesModel.saleById(saleId);
//   return { type: }
// }

// module.exports = {
//   listAllSales,
//   saleById,
// };