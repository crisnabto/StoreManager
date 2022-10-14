const { expect } = require('chai');
const sinon = require('sinon');
const productsModel  = require('../../../src/models/products.model');

const connection = require('../../../src/models/connection');
const { allProducts, productById, newName, idProduct } = require('./mocks/productsMock');

describe('Testes de unidade do model de produtos', function () {
  afterEach(sinon.restore);

  it('Buscando por todos os produtos cadastrados', async function () {
    sinon.stub(connection, 'execute').resolves([allProducts]);
    const result = await productsModel.findAllProducts();
    expect(result).to.be.deep.equal(allProducts);
  });

  it('Recuperando um produto a partir do seu id', async function () {
    sinon.stub(connection, 'execute').resolves([[allProducts[1]]]);
    const result = await productsModel.findProductById(2);
    expect(result).to.be.deep.equal(productById);
  });

  it('Inserindo novo produto', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);
    const result = await productsModel.setNewProduct(allProducts[0])
    expect(result).to.equal(1);
  });

  it('Editando produto', async function () {
    sinon.stub(connection, 'execute').resolves(newName, idProduct);
    const result = await productsModel.editProduct(newName, idProduct);
    expect(result).to.equal(6);
  })

  it('Deletando produto existente', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);
    const result = await productsModel.deleteProduct(1)
    expect(result).to.be.deep.equal(1);
  })
})