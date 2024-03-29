const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      // required: true
    },
    cartproducts: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "fruitsandveggies",
          required: true,
        },
        quantity: {
          type: Number,
          // default: 1,
        },
      }
      // { unique: true }
    ],
  },
  {
    versionKey: false,
    supressReservedKeysWarning: true,
    timestamps: true, // createdAt, updatedAt
  },

);
module.exports = mongoose.model('cart', cartSchema);


