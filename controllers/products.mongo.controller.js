// const fs = require('fs');
const httpStatus = require("http-status");

// Mongoose model for products collection in MongoDB
const {Product} = require("../models/product.schema");
console.log(Product)

// Get all products
exports.getAll = async (_req, res, next) => {
  try {
    const products = await Product.find({})
    res.status(httpStatus.OK).json(products);
  } catch (error) {
    next(error);
  }
};

// // Get a product by id
exports.getByid = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log( "id", id)
    const product = await Product.findById(id);

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

// // Create a new product
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

    const savedItem = await Product.create(newProduct);
    res.status(httpStatus.CREATED).json({
      success: true,
      data: savedItem,
    });
  } catch (error) {
    next(error);
  }
};

// // Update a product by id
// exports.updateProduct = async (req, res, next) => {
//   try {
//     const products = await readFIle(dbName);
//     const { id } = req.params;
//     let product = products.find((product) => product.id === Number(id));

//     if (!product) {
//       return res.status(httpStatus.NOT_FOUND).json({
//         success: false,
//         message: "Product not found",
//       });
//     }

//     const updatedProduct = { ...product, ...req.body };
//     product = updatedProduct;
//     await saveFile(dbName, products);

//     res.status(httpStatus.OK).json({
//       success: true,
//       data: product,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// // Delete a product by id
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = Product.find(id);

    if (!product) {
      return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "Product not found",
      });
    }

    await Product.deleteMany({ _id: id });

    res.status(httpStatus.OK).json({
      success: true,
      message: `Product: ${product.name}, deleted successfully`,
    });
  } catch (error) {

    next(error);
  }
};

// exports.deleteProduct = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const product = Product.findByIdAndDelete(id);

//     if (!product) {
//       return res.status(httpStatus.NOT_FOUND).json({
//         success: false,
//         message: "Product not found",
//       });
//     }

//     res.status(httpStatus.OK).json({
//       success: true,
//       message: `Product: deleted successfully`,
//     });
//   } catch (error) {
    
//     next(error);
//   }
// };