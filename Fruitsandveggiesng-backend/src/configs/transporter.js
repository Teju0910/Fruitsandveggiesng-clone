require('dotenv').config();
let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({

    service:'gmail',
    auth: {
        user: 'tvpatil330@gmail.com',
        pass:"",
        // pass :  process.env.PASS
    }
  });

  module.exports = {transporter}
  
  