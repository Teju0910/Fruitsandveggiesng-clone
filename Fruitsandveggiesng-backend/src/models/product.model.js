const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  categories: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  image1: { type: String, },
  image2: { type: String, },
  mrp: { type: Number, required: true },
  save: { type: Number, required: true },
  price: { type: Number, required: true },
  weight: { type: Number, required: true },
  quantity: { type: Number, required: true },
  isfavoutite: {
    type: Boolean,
    default: false
  },
}, {
  timestamps: true,
  supressReservedKeysWarning: true,
  versionKey: false
});

module.exports = mongoose.model('fruitsandveggies', productSchema);