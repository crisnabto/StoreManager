const salesService = require('../services/sales.service');

const listAllSales = async (req, res) => {
  const { message } = await salesService.listAllSales();
  return res.status(200).json(message);
};

const saleById = async (req, res) => {
  const { id } = req.params;
  const { type, message, error } = await salesService.saleById(id);
  if (error) return res.status(404).json({ message: error });
  return res.status(type).json(message);
};

const newSale = async (req, res) => {
  const newSaleData = req.body;
  const result = await salesService.newSale(newSaleData);
  const { type, message } = result;
  if (type) return res.status(type).json({ message });
  return res.status(201).json(result);
};

const editSale = async (req, res) => {
  const { id } = req.params;
  const saleDoEdit = req.body;
  const result = await salesService.editSale(saleDoEdit, id);
  const { type, message } = result;
  if (type) return res.status(type).json({ message });
  return res.status(200).json(result);
};

module.exports = {
  listAllSales,
  saleById,
  newSale,
  editSale,
};
