const { expect } = require('chai');
const sinon = require('sinon');
const productsModel  = require('../../../src/models/products.model');

const connection = require('../../../src/models/connection');
const { allProducts, productById } = require('./mocks/products.model.mock');

describe('Testes de unidade do model de produtos', function () {
  afterEach(sinon.restore);

  it('Buscando por todos os produtos cadastrados', async function () {
    sinon.stub(connection, 'execute').resolves([allProducts]);
    console.log(allProducts);
    const result = await productsModel.findAllProducts();
    expect(result).to.be.deep.equal(allProducts);
  });

  it('Recuperando um produto a partir do seu id', async function () {
    sinon.stub(connection, 'execute').resolves([[allProducts[1]]]);
    const result = await productsModel.findProductById(2);
    expect(result).to.be.deep.equal(productById);
  });
})