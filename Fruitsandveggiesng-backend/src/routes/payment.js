require("dotenv").config();
const express = require("express");
const Razorpay = require("razorpay");

const router = express.Router();
// console.log(process.env.RAZORPAY_KEY_ID, process.env.RAZORPAY_SECRET)
router.post("/", async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: "rzp_test_4KpG1twUj3b4p2",
            key_secret: "OVSviQCttEfkGjrjBPxLp3Ui",
        });

        const options = {
            amount: 50000, // amount in smallest currency unit
            currency: "INR",
            receipt: "receipt_order_74394",
        };

        const order = await instance.orders.create(options);

        if (!order) return res.status(500).send("Some error occured");
        res.json(order);
        
    } catch (error) {
        res.status(500).send(error);
    }
});


router.post('/',  (req, res)=>{ 
    // STEP 7: Receive Payment Data
    const {order_id, payment_id} = req.body;     
    const razorpay_signature =  req.headers['x-razorpay-signature'];
  
    // Pass yours key_secret here
    const key_secret = YAEUthsup8SijNs3iveeVlL1;     
  
    // STEP 8: Verification & Send Response to User
      
    // Creating hmac object 
    let hmac = crypto.createHmac('sha256', key_secret); 
  
    // Passing the data to be hashed
    hmac.update(order_id + "|" + payment_id);
      
    // Creating the hmac in the required format
    const generated_signature = hmac.digest('hex');
      
      
    if(razorpay_signature===generated_signature){
        res.json({success:true, message:"Payment has been verified"})
    }
    else
    res.json({success:false, message:"Payment verification failed"})
});

module.exports = router;