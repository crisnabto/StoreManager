const { expect } = require('chai');
const sinon = require('sinon');
const productsService = require('../../../src/services/products.service');
const productsModel = require('../../../src/models/products.model');
const { allProducts, productById, newProduct, newName, idProduct } = require('../models/mocks/productsMock');

describe('Testes de unidade do service de produtos', function () {
  afterEach(sinon.restore);

  it('Buscando por todos os produtos cadastrados', async function () {
    sinon.stub(productsModel, 'findAllProducts').resolves(allProducts);
    const result = await productsService.findAllProducts();
    expect(result.message).to.be.deep.equal(allProducts);
  });

  it('Recuperando um produto a partir do seu id', async function () {
    sinon.stub(productsModel, 'findProductById').resolves(allProducts[0]);
    const result = await productsService.findProductById(1);
    expect(result.message).to.be.deep.equal(allProducts[0]);
  });

  it('Testa se retorna erro caso nao encontre id do produto', async function () {
    sinon.stub(productsModel, 'findProductById').resolves(undefined);
    const result = await productsService.findProductById(9);
    expect(result.type).to.equal(404)
  });

  it('Cadastrando um novo produto', async function () {
    sinon.stub(productsModel, 'setNewProduct').resolves({ insertId: newProduct.id });
    sinon.stub(productsModel, 'findProductById').resolves(newProduct);
    const result = await productsService.setNewProduct(newProduct.name);
    expect(result.message).to.be.deep.equal(newProduct);
  });

  it('Editando um produto', async function () {
    sinon.stub(productsModel, 'editProduct').resolves();
    sinon.stub(productsModel, 'findProductById').resolves(newProduct)
    const result = await productsService.editProduct(newName, idProduct);
    console.log(result);
    expect(result.message).to.be.deep.equal(newProduct);
  });

  it('Deletando um produto', async function () {
    sinon.stub(productsModel, 'deleteProduct').resolves();
    sinon.stub(productsModel, 'findProductById').resolves(newProduct)
    const result = await productsService.deleteProduct(idProduct);
    console.log(result);
    expect(result.type).to.equal(204);
  });

  it('Erro ao deletar um produto inexistente', async function () {
    sinon.stub(productsModel, 'deleteProduct').resolves();
    sinon.stub(productsModel, 'findProductById').resolves(undefined)
    const result = await productsService.deleteProduct(idProduct);
    console.log(result);
    expect(result.type).to.equal(404);
  });
})