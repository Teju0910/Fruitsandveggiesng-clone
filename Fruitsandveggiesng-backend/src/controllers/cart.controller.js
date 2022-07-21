const express = require("express");
const router = express.Router();
const crudController = require("./crud.controller");
const Cart = require("../models/cart.model");

//GET ALL--
router.get("/", crudController.listAll(Cart));

//GET ONE--
router.get("/:id", async (req, res) => {
    try {
        const cart = await Cart.find({ user_id: req.params.id }).lean().exec();
        return res.status(200).send(cart);
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

//POST---
router.post("/", async (req, res) => {
    try {
        const savedCart = Cart.create(req.body);
        res.status(200).json(savedCart);

    } catch (err) {
        res.status(500).json(err);
    }
});

//UPDATE---
router.patch("/:id", crudController.updateById(Cart));

//GET USER CART---
router.get("/find/:userId", async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json(err);
    }
});

///DELETE---
router.delete("/:id", crudController.deleteById(Cart));

module.exports = router;
// router.post("/", async (req, res) => {
//     var query = req.body.cartproducts.productId;
//     console.log(req, "query")
//     try {
//         // Cart.findOne({ productId: query }, function (err, example) {
//         //     if (err) console.log(err);
//         //     console.log(example.cartproducts, "example")
//         //     if (example.cartproducts.productId == query) {
//         //         console.log("This has already been saved");
//         //     } else {
//         const savedCart = Cart.create(req.body);
//         res.status(200).json(savedCart);
//         //     }
//         // })
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });