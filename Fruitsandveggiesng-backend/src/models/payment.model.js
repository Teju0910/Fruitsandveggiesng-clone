const mongoose = require("mongoose");

// USER SCHEMA
// Step 1 :- creating the schema
const PaySucessSchema = new mongoose.Schema(
    {
        orderCreationId: { type: String, required: true },
        razorpayPaymentId: { type: String, required: true },
        razorpayOrderId: { type: String, required: true },
        razorpaySignature: { type: String, required: true },
    },
    {
        versionKey: false,
        timestamps: true, // createdAt, updatedAt
    }
);

// Step 2 : creating the model
const Pay = mongoose.model("sucess", PaySucessSchema); // user => users

module.exports = Pay;
