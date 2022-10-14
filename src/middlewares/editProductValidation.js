// const productsModel = require('../models/products.model');

// const productName = async (idProduct) => {
//   const findProductToEdit = await productsModel.findProductById(idProduct);
//   console.log('passou aqui');
//   if (!findProductToEdit) return true;
// };

// const productName = (name) => {
//   if (!name) return true;
// }

// const editProductValidation = (req, res, next) => {
//   const { id } = req.params;
//   const { name } = req.body;

//   try {
//     if (productName(name)) throw new Error('Product not found');
//   } catch (error) {
//     return res.status(404).json({ message: `${error.message}` });
//   }
//   next();
// };

// module.exports = {
//   editProductValidation,
// };