const productName = (product) => {
  if (!product) return true;
};

const productNameLenght = (product) => {
  if (product.length < 5) return true;
};

const productNameValidation = (req, res, next) => {
  const { name } = req.body;
  try {
    if (productName(name)) throw new Error('"name" is required');
  } catch (error) {
    return res.status(400).json({ message: `${error.message}` });
  }
  next();
};

const productNameLengthValidation = (req, res, next) => {
  const { name } = req.body;
  const messageError = '"name" length must be at least 5 characters long';
  try {
    if (productNameLenght(name)) throw new Error(messageError);
  } catch (error) {
    return res.status(422).json({ message: `${error.message}` });
  }
  next();
};

module.exports = {
  productNameValidation,
  productNameLengthValidation,
};