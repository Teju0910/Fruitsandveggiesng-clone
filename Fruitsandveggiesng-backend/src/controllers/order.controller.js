const Order = require("../models/order.model");
const crudController = require("./crud.controller");

// const {
//   verifyToken,
//   verifyTokenAndAuthorization,
//   verifyTokenAndAdmin,
// } = require("./verifyToken");

const router = require("express").Router();

//CREATE---
router.post("/", async (req, res) => {
  // console.log(req.body, "order")
  const newOrder = new Order(req.body);
  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE---
router.patch("/:id", crudController.updateById(Order));

//DELETE---
router.delete("/:id", crudController.deleteById(Order));

//GET USER ORDERS
router.get("/find/:userId", async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId })
      .populate({ path: "cartproducts.productId" })
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

// //GET ALL----
router.get("/", crudController.listAll(Order));


module.exports = router;