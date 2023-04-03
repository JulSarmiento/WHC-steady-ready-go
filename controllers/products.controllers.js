// const fs = require('fs');
const httpStatus = require('http-status');

// name and route of the file
const dbName = `db/${process.env.DATABASE}.txt`;

// FileSystem utils functions (read and save)
const readFIle = require('../src/utils/readFile');
const saveFile = require('../src/utils/saveFile');
  

// Get all products
exports.getAll = async (_req, res, next) => {
  try {
    const products = await readFIle(dbName);
    res.status(httpStatus.OK).json(products);

  } catch (error) {
    next(error)
  }
};

// Get a product by id
exports.getByid = async (req, res, next) => {
  
  try {
    const products = await readFIle(dbName);
    const {id} = req.params;
    const product = products.find((product) => product.id === Number(id));
    

    if (!product) {
      return res.status(httpStatus.BAD_REQUEST).json({
        success: false,
        message: 'Product not found'
      });
    }

    res.status(httpStatus.OK).json({
      success: true,
      data: product
    });
  
  } catch (error){
    next(error)
  }  
};

// Create a new product
exports.createProduct = async (req, res, next) => {

  try {
    const products = await readFIle(dbName);
    const {name, price, category, description, cuantity} = req.body;
    const newProduct = {
      id: products.length + 1,
      name,
      price,
      category,
      description,
      cuantity
    };
  
    products.push(newProduct);
    await saveFile(dbName, products);
  
    res.status(httpStatus.CREATED).json({
      success: true,
      data: newProduct    
    });

  } catch (error){
    next(error);

  }

};

// Update a product by id
exports.updateProduct = async (req, res) => {
  try {
    const products = await readFIle(dbName);
    const {id} = req.params;
    const product = products.find((product) => product.id === Number(id));
  
    if (!product) {
      return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: 'Product not found'
      });
    }
  
    const {name, price, description, cuantity} = req.body;
    product.name = name;
    product.price = price;
    product.description = description;
    product.cuantity = cuantity;
  
    await saveFile(dbName, products);
  
    res.status(httpStatus.OK).json({
      success: true,
      data: product
    });

  } catch (error){
    next(error);
  }
}

// Delete a product by id
exports.deleteProduct = async (req, res) => {
  try {
    const products = await readFIle(dbName);
    const {id} = req.params;
    const product = products.find((product) => product.id === Number(id));
  
    if (!product) {
      return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: 'Product not found'
      });
    }
  
    const newProducts = products.filter((product) => product.id !== Number(id));
    await saveFile(dbName, newProducts);
  
    res.status(httpStatus.OK).json({
      success: true,
      message: `Product: ${product.name}, deleted successfully`
    });
  } catch (error){
    next(error);
  } 
};
