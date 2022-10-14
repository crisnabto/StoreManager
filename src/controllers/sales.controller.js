// const salesService = require('../services/sales.service');

// const listAllSales = async (req, res) => {
//   const { type, message } = await salesService.listAllSales();
//   return res.status(type).json(message);
// };

// const saleById = async (req, res) => {
//   const { id } = req.params;
//   console.log(id);
//   const { type, message, error } = await salesService.saleById(id);
//   if (error) return res.status(type).json({ message: error });
//   return res.status(type).json(message);
// };

// module.exports = {
//   listAllSales,
//   saleById,
// };

// Recebe:
// [
//   {
//     "productId": 1,
//     "quantity": 1
//   },
//   {
//     "productId": 2,
//     "quantity": 5
//   }
// ]

// Retorna:
// {
//   "id": 3,
//     "itemsSold": [
//       {
//         "productId": 1,
//         "quantity": 1
//       },
//       {
//         "productId": 2,
//         "quantity": 5
//       }
//     ]
// }