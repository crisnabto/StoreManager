const salesModel = require('../models/sales.model');
const { prodExist, saleExist } = require('../middlewares/salesValidations');

const listAllSales = async () => {
  const sales = await salesModel.listAllSales();
  if (!sales) return ({ type: 404, message: 'Sale not found' });
  return ({ type: 200, message: sales });
};

const saleById = async (saleId) => {
  const sale = await salesModel.saleById(saleId);
  if (sale.length > 0) return { type: 200, message: sale };
  return { error: 'Sale not found' };
};

const newSale = async (newSaleData) => {
  const dataOk = await prodExist(newSaleData);
  if (dataOk.status === 404) return { type: 404, message: 'Product not found' };
  const newSaleCreated = await salesModel.newSale(newSaleData);
  return { id: newSaleCreated, itemsSold: newSaleData };
};

const editSale = async (saleData, saleId) => {
  const saleOk = await saleExist(saleId);
  if (saleOk.status === 404) return { type: 404, message: 'Sale not found' };
  const dataOk = await prodExist(saleData);
  if (dataOk.status === 404) return { type: 404, message: 'Product not found' };
  const editSaleDb = await salesModel.editSale(saleData, saleId);
  return { saleId: editSaleDb, itemsUpdated: saleData };
};

module.exports = {
  listAllSales,
  saleById,
  newSale,
  editSale,
};