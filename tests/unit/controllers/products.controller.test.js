const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = require('chai');
const productsService = require('../../../src/services/products.service');
const productsController = require('../../../src/controllers/products.controller');

chai.use(sinonChai)

const connection = require('../../../src/models/connection');
const { allProducts, productById, newProduct, editProduct, editedProduct } = require('../models/mocks/productsMock');

describe('Testes de unidade do controller de produtos', function () {
  afterEach(sinon.restore);

  it('Buscando por todos os produtos cadastrados', async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    
    sinon.stub(productsService, 'findAllProducts').resolves({ type: 200, message: allProducts});
    await productsController.listProducts(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allProducts);
  });

  it('Recuperando um produto a partir do seu id', async function () {
    const res = {};
    const req = { params: { id: 1 }};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'findProductById').resolves({ type: 200, message: allProducts[0] });
    await productsController.getProductById(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(allProducts[0]);
  });

  it('Cadastrando um novo produto', async function () {
    const res = {};
    const req = { body: { name: 'ProductX' } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'setNewProduct').resolves({ type: null, message: newProduct });
    await productsController.setNewProduct(req, res);
    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newProduct);
  });

  it('Editando um produto', async function () {
    const res = {};
    const req = { body: editProduct, params: { id: 3 } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'editProduct').resolves({ type: 200, message: editedProduct });
    await productsController.editProduct(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(editedProduct);
  });
})