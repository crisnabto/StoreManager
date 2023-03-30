const express = require('express');
const productsController = require('./controllers/products.controller');
const salesController = require('./controllers/sales.controller');
const {
  productNameValidation,
  productNameLengthValidation,
} = require('./middlewares/productNameValidation');
const { validateProducts, validateQuantity } = require('./middlewares/salesValidations');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar;
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', productsController.listProducts);

app.get('/products/:id', productsController.getProductById);

app.post('/products',
  productNameValidation,
  productNameLengthValidation,
  productsController.setNewProduct);

app.put('/products/:id',
  productNameValidation,
  productNameLengthValidation,
  productsController.editProduct);

app.delete('/products/:id', productsController.deleteProduct);

app.get('/sales', salesController.listAllSales);

app.get('/sales/:id', salesController.saleById);

app.post('/sales', validateProducts, validateQuantity, salesController.newSale);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;