
require('dotenv').config();
const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect(
        "mongodb+srv://fruitveggies:n5Q61yhFMvwoTkTY@cluster0.uiatq4k.mongodb.net/fruitsandveggie"
        // "mongodb+srv://revvbackend:revv123@cluster0.h57o8.mongodb.net/revv_backend"
    );
};