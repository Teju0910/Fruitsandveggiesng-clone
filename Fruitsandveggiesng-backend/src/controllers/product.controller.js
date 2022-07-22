const express = require("express");
const router = express.Router();
const crudController = require("./crud.controller");
const Product = require("../models/product.model");


// router.get("/", async (req, res) => {
//     try {
//         let category = req.query.category
//         const data = await Product.find().lean().exec();
//         return res.status(200).send({ data });
//     } catch (err) {
//         return res.status(500).send(err.message);
//     }
// });


router.get("/", async (req, res) => {
    try {
        let category = req.query.categories;
        let data;
        if (category) {
            data = await Product.find({ categories: category }).lean().exec();
        }
        else {
            data = await Product.find().lean().exec();
        }
        return res.status(200).send({ data });
    } catch (err) {
        return res.status(500).send(err.message);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const cart = await Product.findById(req.params.id).lean().exec();
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post("/", crudController.addOne(Product));

router.patch("/:id", crudController.updateById(Product));

router.delete("/:id", crudController.deleteById(Product));

module.exports = router;
