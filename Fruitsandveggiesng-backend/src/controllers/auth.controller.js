require('dotenv').config();
const User = require("../models/user.models")
const jwt = require('jsonwebtoken');
// const {google} = require('googleapis');

const { transporter } = require("../configs/mail");

const { validationResult } = require("express-validator");


//https://www.npmjs.com/package/jsonwebtoken(creat token)
const generateToken = (user) => {
  return jwt.sign({ user }, process.env.SECRET_KEY)
}

const register = async (req, res) => {
  // console.log(req.body.name, "s")
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }

    if (!req.body.name) {
      return res.status(400).send({ message: "Please enter your name" })
    }

    let user = await User.findOne({ email: req.body.email }).lean().exec();
    //checking email
    if (user) {
      return res.status(400).send({ message: "Email already exists" })
    }


    // if new user, create it or allow to register;
    user = await User.create(req.body);
    const token = generateToken(user)
    // console.log("a")

    // send email  to customer
    let status = "ok";
    const mailoptions = {
      from: '"fruit&veggies admin" <fruit&veggies@gmail.com>', // sender address
      to: `${user.email}`, // list of receivers
      subject: `Welcome to Fruit & Veggies, ${user.name}`, // Subject line
      html: `
        <p>Dear ${user.name}!</p>
        <p>Thanks for choosing Fruit & Veggies!</p>
        <p>We are excited to have you on-board, and look forward to delivering a fresh fruits and vegetable . 
        Choose From a Wide Variety Of Exotic Fruits & Vegetables At Fruit & Veggies.
            <br><br>          
            Don't have the time to go grocery shopping? Buy organic vegetables & fresh fruits online!
    <br><br>
    Fresh, Tasty, Quality Fruit & Veg, delivered to your door. 
            <br>   <br>   
            Should you need any further assistance, contact us at care@fruits.co.in, or call us on +91 9250035555.
            <br>  <br>     
            Look forward to see you again at Fruits & Vegetables.
            <br> <br>     
            Team @ Fruites&Veggies
            <br><br>   
        </p>
        <img src="https://fruitsandveggiesng.com/wp-content/uploads/2021/09/fv_logo-96x61-1.png"/>
`, // html body
    }
    // console.log("c")
    res.status(200).send({ user, token, status });
    const result = await transporter.sendMail(mailoptions)
    if (result) {
      console.log("Email sent")
    }
    else {
      console.log("Email not sent")
    }
    // return res.status(200).send({ user, token, status });
  }
  catch (err) {
    console.log({ message: err.message })
    return res.status(400).send({ message: err.message }, "errreg");
  }
}



const login = async (req, res) => {
  console.log(req.body, "log")
  try {
    const user = await User.findOne({ email: req.body.email })
    //checked if mail exists
    if (!user) {
      return res.status(400).send("Wrong Email or Password")
    }

    //if email exists, check password;
    const match = user.checkPassword(req.body.password)

    // if it doesn't match
    if (!match) {
      return res.status(400).send({ message: "Wrong Email or Password" })
    }

    // if it matches
    const token = generateToken(user)
    // console.log(token, "token")
    return res.status(200).send({ user, token });

  }
  catch (err) {
    res.status(400).send({ message: err.message })
  }
}

module.exports = { register, login, generateToken }

