const express = require("express");

const Payment = require("../models/payment.model");

const router = express.Router();

// COMMENTS CRUD
router.get("/", async (req, res) => {
    try {
        const pay = await Payment.find().lean().exec();
        return res.status(200).send(pay);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
});


router.post("/", async (req, res) => {
    try {
        const paymentdone = await Payment.create(req.body);
        console.log(req.body);
        return res.status(201).send(paymentdone);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
});


module.exports = router;
