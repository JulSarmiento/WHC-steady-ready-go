import mongoose, {Document, Schema} from "mongoose";

export interface IProduct extends Document {
  name: string;
  price: number;
  category: string;
  description?: string;
  cuantity?: number;
};

const productSchema = new Schema({
  "name": {
    type: String,
    unique: true,
    required: true
  },
  "price": {
    type: Number,
    required: true
  },
  "category": {
    type: String,
    required: true
  },
  "description": {
    type: String,
    required: false
  },
  "cuantity": {
    type: Number,
    required: false,
    default: 0
  }
});

export default mongoose.model<IProduct>("Product", productSchema);