const connection = require('./connection');

const listAllSales = async () => {
  const [result] = await connection.execute(
    `SELECT id AS 'saleId', date, product_id AS 'productId', quantity
    FROM StoreManager.sales
    INNER JOIN StoreManager.sales_products
    ON StoreManager.sales.id = StoreManager.sales_products.sale_id;`,
  );
  return result;
};

const saleById = async (saleId) => {
  const [result] = await connection.execute(
    `SELECT date, product_id AS 'productId', quantity
    FROM StoreManager.sales
    INNER JOIN StoreManager.sales_products
    ON StoreManager.sales.id = StoreManager.sales_products.sale_id
    WHERE StoreManager.sales.id = ?;`,
    [saleId],
  );
  return result;
};

const newSale = async (products) => {
  const [result] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUE (NOW())',
  );

  const saleId = result.insertId;
  const values = products.map(({ productId, quantity }) => [saleId, productId, quantity]);

  await connection.execute(
    `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES ${ 
    values.map(() => '(?, ?, ?)').join(', ')}`,
    values.flat(),
  );

  return saleId;
};

const editSale = async (saleData, saleId) => {
  const result = saleData.map(({ productId, quantity }) =>
    connection.execute(
      'UPDATE StoreManager.sales_products SET quantity = ? WHERE product_id = ? AND sale_id = ?',
      [quantity, productId, saleId],
    ));

  await Promise.all(result);

  return saleId;
};

const deleteSale = async (saleId) => {
  await connection.execute(
    'DELETE FROM StoreManager.sales WHERE id = ?',
    [saleId],
  );
  return saleId;
};

module.exports = {
  listAllSales,
  saleById,
  newSale,
  editSale,
  deleteSale,
};