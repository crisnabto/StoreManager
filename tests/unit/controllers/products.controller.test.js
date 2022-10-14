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

  it('Erro ao tentar recuperar um produto inexistente', async function () {
    const res = {};
    const req = { params: { id: 99 } };
    const errorMessage = 'Product not found';

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'findProductById').resolves({ type: 404, error: errorMessage });
    await productsController.getProductById(req, res);
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: errorMessage });
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

  it('Erro ao editar um produto inexistente', async function () {
    const res = {};
    const req = { body: editProduct, params: { id: 99 } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'editProduct').resolves({ type: 200, message: undefined });
    await productsController.editProduct(req, res);
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found'});
  });

  it('Deletando um produto', async function () {
    const res = {};
    const req = { params: { id: 3 } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'deleteProduct').resolves({ type: 204});
    await productsController.deleteProduct(req, res);
    expect(res.status).to.have.been.calledWith(204);
  });

  it('Erro ao deletar um produto inexistente', async function () {
    const res = {};
    const req = { params: { id: 99 } };
    const error = 'Product not found';

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    sinon.stub(productsService, 'deleteProduct').resolves({ type: 404, error: error });
    await productsController.deleteProduct(req, res);
    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: error });
  });
})