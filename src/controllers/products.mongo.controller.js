const httpStatus = require("http-status");

// Mongoose model for products collection in MongoDB
const { ProductSchemas } = require("../models");
console.log("product schema", ProductSchemas)

// Get all products
exports.getAll = async (_req, res, next) => {
  try {
    const products = await ProductSchemas.find({})
    res.status(httpStatus.OK).json(products);
  } catch (error) {
    next(error);
  }
};

// Get a product by id
exports.getByid = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log( "id", id)
    const product = await ProductSchemas.findById(id);

    if (!product) {
      return res.status(httpStatus.BAD_REQUEST).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(httpStatus.OK).json({
      success: true,
      data: product,
    });

  } catch (error) {
    next(error);
  }
};

// Create a new product
exports.createProduct = async (req, res, next) => {
  try {
    const { name, price, category, description, cuantity } = req.body;
    const newProduct = {
      name,
      price,
      category,
      description,
      cuantity,
    };

    const savedItem = await ProductSchemas.create(newProduct);
    res.status(httpStatus.CREATED).json({
      success: true,
      data: savedItem,
    });
  } catch (error) {
    next(error);
  }
};

// // Update partial a product by id
exports.updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    let product = await ProductSchemas.findById(id);

    if (!product) {
      return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "Product not found",
      });
    }

    await ProductSchemas.updateOne({ _id: id }, req.body);
    
    res.status(httpStatus.OK).json({
      success: true,
      data: await ProductSchemas.findById(id),
    });
  } catch (error) {
    next(error);
  }
};

// Delete a product by id
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductSchemas.find(id);

    if (!product) {
      return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "Product not found",
      });
    }

    await ProductSchemas.deleteOne({ _id: id });

    res.status(httpStatus.OK).json({
      success: true,
      message: `Product: ${product.name}, deleted successfully`,
    });
  } catch (error) {

    next(error);
  }
};



