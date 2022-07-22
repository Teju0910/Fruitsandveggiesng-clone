const express = require("express");

const cors = require('cors');

const userController = require("./controllers/user.controller")

const { body } = require("express-validator");
const { register, login, generateToken } = require("./controllers/auth.controller")
const User = require("./models/user.models")
const app = express();
app.use(express.json());
app.use(cors());
app.use("/user", userController)
app.post("/register", register)
app.post("/login", login)

app.get("/", async function (req, res) {
  return res.status(200).send("User");
})

const paymentcontroller = require("./controllers/payment.controller")

app.use("/orders/create", require("./routes/payment"));
app.use("/orders/pay", paymentcontroller);

app.post("/register",
  body("name")
    .trim()
    .not()
    .isEmpty()
    .bail()
    .withMessage("First Name cannot be empty")
    .isLength({ min: 4 })
    .withMessage("First Name must be at least 4 characters"),

  body("email")
    .isEmail()
    .custom(async (value) => {
      console.log(value)
      const user = await User.findOne({ email: value });

      if (user) {
        throw new Error("Email is already taken");
      }
      return true;
    }),

  body("password")
    .not()
    .isEmpty()
    .withMessage("Password is required")
    .custom((value) => {
      const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,15}$/;
      if (!value.match(passw)) {
        throw new Error("Password must be strong");
      }
      return true;
    })
  // body("mobileNumber").custom((value) => {
  //   if (value && value.length != 10 ) {
  //     throw new Error("Mobile Number must be 10 digits");
  //   }
  //   return true;
  // })

  , register)


app.post("/login", login)



const productController = require("./controllers/product.controller");

const cartController = require("./controllers/cart.controller");
const orderController = require("./controllers/order.controller");

// const queryController = require('./controllers/query.controller');

app.use("/fruitsandveggies", productController);
app.use("/order", orderController);
app.use("/cart", cartController);
console.log("z")
// app.use("/locations", locationController);

// app.use("/q", queryController);
module.exports = app;
