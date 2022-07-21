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
    const orders = await Order.find({ userId: req.params.userId });
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

// //GET ALL----
router.get("/", crudController.listAll(Order));


// // GET MONTHLY INCOME

// router.get("/income", async (req, res) => {
//   const date = new Date();
//   const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
//   const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

//   try {
//     const income = await Order.aggregate([
//       { $match: { createdAt: { $gte: previousMonth } } },
//       {
//         $project: {
//           month: { $month: "$createdAt" },
//           sales: "$amount",
//         },
//       },
//       {
//         $group: {
//           _id: "$month",
//           total: { $sum: "$sales" },
//         },
//       },
//     ]);
//     res.status(200).json(income);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;