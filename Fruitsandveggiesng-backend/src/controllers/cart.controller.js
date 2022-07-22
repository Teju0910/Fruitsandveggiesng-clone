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

// //POST---
// router.post("/", async (req, res) => {
//     try {
//         const savedCart = Cart.create(req.body);
//         res.status(200).json(savedCart);

//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

//UPDATE---
// router.patch("/:id", crudController.updateById(Cart));

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




router.post("/", async (req, res) => {
    const newCart = new Cart(req.body);

    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.patch("/", async (req, res) => {
    console.log(req.body, "...")
    try {
        console.log("A")
        console.log(req.body.cartproducts, "cartproduct")
        Cart.findOne({ userId: req.body.userId },
            async (err, example) => {
                console.log("B")
                if (err) { return console.error(err) }
                if (example) {
                    let allcart = example.cartproducts
                    console.log("C", allcart);
                    let falg = true;
                    for (let i = 0; i < allcart.length; i++) {
                        // console.log("D")
                        if (allcart[i].productId === req.body.cartproducts[0].productId) {
                            // console.log("E")
                            falg = false;
                            // console.log("Already in cartbackend")
                            res.send({ message: "Already in cartbackend" });
                            break;
                        }
                    }
                    if (falg == true) {
                        // console.log("F")
                        Cart.findOne({ userId: req.body.userId })
                            .then((user) => {
                                const cart = user.cartproducts
                                // console.log("X", cart)
                                cart.push(req.body.cartproducts[0])
                                // console.log("Z", cart)
                                return user.save()
                            })
                            .then((user) => {
                                res.send({ user });
                            })
                            .catch(e => res.status(400).send(e));
                    }
                }
            })
    } catch (err) {
        // console.log(err)
        res.status(500).json(err);
    }
})


module.exports = router;