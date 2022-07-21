const nodemailer = require("nodemailer");
const { google } = require('googleapis');
require('dotenv').config();

const YOUR_CLIENT_ID = "314274253779-hijojde98cfdckl6fd076tts34i4lnkt.apps.googleusercontent.com";
const YOUR_CLIENT_SECRET = "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";
const YOUR_REDIRECT_URL = "https://developers.google.com/oauthplayground"
const refresh_token = "1//04r_divZ4zuQuCgYIARAAGAQSNgF-L9IrqAkkTiyhn_ilxxK2khA1pvjXdfW4wmcsQjTpa4Vteizo_MkEv80CvRnkuZ3kgH-WnA";
console.log("y")
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
    user: "tvpatil330@gmail.com",
    pass: "TEJ@bhi0702",
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
