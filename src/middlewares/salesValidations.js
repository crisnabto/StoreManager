const productsService = require('../services/products.service');
const salesModel = require('../models/sales.model');

const validateProducts = (req, res, next) => {
  let status = 200;
  req.body.forEach((obj) => {
    if (!Object.prototype.hasOwnProperty.call(obj, 'productId')) {
      status = 400;
      return res.status(status).json({ message: '"productId" is required' });
    }
  });

  if (status === 200) {
    next();
  }
};

const validateQuantity = (req, res, next) => {
  let status = 200;
  req.body.forEach((obj) => {
    if (!Object.prototype.hasOwnProperty.call(obj, 'quantity')) {
      status = 400;
      return res.status(status).json({ message: '"quantity" is required' });
    }
    if (obj.quantity < 1) {
      status = 422;
      return res.status(status).json({ message: '"quantity" must be greater than or equal to 1' });
    }
  });

  if (status === 200) {
    next();
  }
};

const prodExist = async (products) => {
  const productsId = products.map((prod) => prod.productId);
  const validations = await Promise
    .all(productsId.map((id) => productsService.findProductById(id)));

  if (validations.some((result) => result.type === 404)) {
    return { status: 404, message: 'Product not found' };
  }
  return { status: 200, message: 'All products are valid' };
};

const saleExist = async (saleId) => {
  const result = await salesModel.saleById(saleId);
  if (result.length === 0) return { status: 404, message: 'Sale not found' };
  return { status: 200, message: 'Valid sale' };
};

module.exports = { prodExist, validateProducts, validateQuantity, saleExist };
