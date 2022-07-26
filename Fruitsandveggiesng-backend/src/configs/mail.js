const nodemailer = require("nodemailer");
const { google } = require('googleapis');
require('dotenv').config();
const YOUR_CLIENT_ID = process.env.YOUR_CLIENT_ID;
const YOUR_CLIENT_SECRET = process.env.YOUR_CLIENT_SECRET;
const YOUR_REDIRECT_URL = process.env.YOUR_REDIRECT_URL;
const refresh_token = refresh_token = process.env.refresh_token;
const MAIL = process.env.MAIL
const PASS = process.env.PASS
//ya29.A0AVA9y1s_51Fs6LTrsyTb0rXAZimoR0dSMyHJQisXAXW0D5Fft2LCKgBwfqoQ8MpguNYg0EkYOsZ8niHF7njENkkdifWbpWPKyXyGliahS5HV3M1U5HZZrcJHVanvj_W9w3W0PQ5g9fip2f5yLu48bHOkZEaqYUNnWUtBVEFTQVRBU0ZRRTY1ZHI4ZUhtVlFsaWhSRS1VRlJwWUkySklOZw0163
const oauth2Client = new google.auth.OAuth2(
  YOUR_CLIENT_ID,
  YOUR_CLIENT_SECRET,
  YOUR_REDIRECT_URL
);

oauth2Client.setCredentials({
  refresh_token: refresh_token
});
// 


const accessToken = oauth2Client.getAccessToken()

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: MAIL,
    pass: PASS,
    clientId: YOUR_CLIENT_ID,
    clientSecret: YOUR_CLIENT_SECRET,
    refreshToken: refresh_token,
    accessToken: accessToken,
  },
  tls: {
    rejectUnauthorized: false
  }
});

module.exports = { transporter }
