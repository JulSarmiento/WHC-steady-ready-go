const fs = require('fs');
const httpStatus = require('http-status');

// name and route of the file
const dbName = `db/${process.env.DATABASE}.txt`;

const readFIle = require('../src/utils/readFile');
const saveFile = require('../src/utils/saveFile');

exports.getAll = async (_req, res) => {
  const products = await readFIle(dbName);
  res.status(httpStatus.OK).json(products);
};

exports.getByid = async (req, res) => {
  const products = await readFIle(dbName);
  const {id} = req.params;
  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return res.status(httpStatus.NOT_FOUND).json({
      success: false,
      message: 'Product not found'
    });
  }

  res.status(httpStatus.OK).json({
    success: true,
    data: product
  });
};

exports.createProduct = async (req, res) => {
  const products = await readFIle(dbName);
  const {name, price, description, cuantity} = req.body;
  const newProduct = {
    id: products.length + 1,
    name,
    price,
    description,
    cuantity
  };

  products.push(newProduct);
  await saveFile(dbName, products);

  res.status(httpStatus.CREATED).json({
    success: true,
    data: newProduct    
  });
};

