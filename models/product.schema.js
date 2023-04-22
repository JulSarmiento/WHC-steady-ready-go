const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  "name": {
    type: String,
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

exports.Product = mongoose.model('Product', productSchema);