const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
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

module.exports = mongoose.model('Product', productSchema);