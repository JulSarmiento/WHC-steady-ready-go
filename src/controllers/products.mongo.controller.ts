import httpStatus from "http-status";

// Mongoose model for products collection in MongoDB
import { ProductSchema } from "../models";
import { NextFunction, Request, Response } from "express";


// Get all products
export const getAll = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await ProductSchema.find({})
    res.status(httpStatus.OK).json(products);
    
  } catch (error) {
    next(error);

  };
};

// Get a product by id
export const getByid = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    console.log( "id", id)
    const product = await ProductSchema.findById(id);
    if (!product) {
      return res.status(httpStatus.BAD_REQUEST).json({
        success: false,
        message: "Product not found",
      });
    };
    res.status(httpStatus.OK).json({
      success: true,
      data: product,
    });

  } catch (error) {
    next(error);

  };
};

// Create a new product
export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, price, category, description, cuantity } = req.body;
    const newProduct = {
      name,
      price,
      category,
      description,
      cuantity,
    };
    const savedItem = await ProductSchema.create(newProduct);
    res.status(httpStatus.CREATED).json({
      success: true,
      data: savedItem,
    });

  } catch (error) {
    next(error);

  };
};

// // Update partial a product by id
export const updateProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    let product = await ProductSchema.findById(id);
    if (!product) {
      return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "Product not found",
      });
    };
    await ProductSchema.updateOne({ _id: id }, req.body);    
    res.status(httpStatus.OK).json({
      success: true,
      data: await ProductSchema.findById(id),
    });

  } catch (error) {
    next(error);

  };
};

// Delete a product by id
export const deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const product = await ProductSchema.findById(id);

    if (!product) {
      return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "Product not found",
      });
    };
    await ProductSchema.deleteOne({ _id: id });
    res.status(httpStatus.OK).json({
      success: true,
      message: `Product: ${product.name}, deleted successfully`,
    });

  } catch (error) {
    next(error);
  }
};



