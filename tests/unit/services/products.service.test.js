const { expect } = require('chai');
const sinon = require('sinon');
const productsService = require('../../../src/services/products.service');
const productsModel = require('../../../src/models/products.model');
const { allProducts, productById } = require('../models/mocks/productsMock');

describe('Testes de unidade do service de produtos', function () {
  afterEach(sinon.restore);

  it('Buscando por todos os produtos cadastrados', async function () {
    sinon.stub(productsModel, 'findAllProducts').resolves(allProducts);
    console.log(allProducts);
    const result = await productsService.findAllProducts();
    expect(result.message).to.be.deep.equal(allProducts);
  });

  it('Recuperando um produto a partir do seu id', async function () {
    sinon.stub(productsModel, 'findProductById').resolves(allProducts[0]);
    const result = await productsService.findProductById(1);
    expect(result.message).to.be.deep.equal(allProducts[0]);
  });
})