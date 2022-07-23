const express = require("express");
const router = express.Router();
const crudController = require("./crud.controller");
const Cart = require("../models/cart.model");

//GET ALL--
router.get("/", crudController.listAll(Cart));

//GET ONE--
router.get("/:id", async (req, res) => {
    try {
        const cart = await Cart.find({ user_id: req.params.id })
            .populate({ path: "cartproducts.productId", select: ["name"] })
            .lean().exec();
        return res.status(200).send(cart);
    } catch (err) {
        return res.status(500).send(err.message);
    }
});


//UPDATE---
// router.patch("/:id", crudController.updateById(Cart));

//GET USER CART---
router.get("/find/:userId", async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId })
            .populate({ path: "cartproducts.productId" })
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json(err);
    }
});

///DELETE---

router.put("/removecart", (req, res) => {
    //find the user by the id parameter first, then locate and remove the post specified by the id in req.body 
    console.log(req.body, "res")
    Cart.findOne({ userId: req.body.userId }, function (err, result) {
        if (!err) {
            if (!result) {
                console.log("A")
                res.status(404).send('User was not found');
            }
            else {
                console.log(result.cartproducts.id(req.body.productId), "C")
                result.cartproducts.id(req.body.productId).remove(function (removeerr, removresult) {
                    if (removeerr) {
                        res.status(400).send(removeerr.message);
                    }
                });
                result.markModified('posts');
                result.save(function (saveerr, saveresult) {
                    if (!saveerr) {
                        console.log("B")
                        res.status(200).send(saveresult);
                    } else {
                        res.status(400).send(saveerr.message);
                    }
                });
            }
        } else {
            res.status(400).send(err.message);
        }
    });
});



router.post("/", async (req, res) => {
    const newCart = new Cart(req.body);
    try {
        const savedCart = await newCart.save()
            .populate({ path: "cartproducts.productId", select: ["price"] })
        res.status(200).json(savedCart);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.patch("/", async (req, res) => {
    // console.log(req.body, "...")
    try {
        // console.log("A")
        // console.log(req.body.cartproducts, "cartproduct")
        Cart.findOne({ userId: req.body.userId },
            async (err, example) => {
                // console.log("B")
                if (err) { return console.error(err) }
                if (example) {
                    let allcart = example.cartproducts
                    // console.log("C", allcart);
                    let falg = true;
                    for (let i = 0; i < allcart.length; i++) {
                        // console.log("D", allcart[i].productId.valueOf())
                        if (allcart[i].productId.valueOf() === req.body.cartproducts[0].productId) {
                            // console.log("E")
                            falg = false;
                            // console.log("Already in cartbackend")
                            res.send({ message: "Already in Cart" });
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
                                res.send({ user })

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