const express = require('express')
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const QRCode = require('qrcode')

dotenv.config({ path: './config/config.env' });

const app = express()

app.use(bodyParser.json());

app.post("/create-payment-intent", async (req, res, next) => {
  const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000,
      currency: "usd"
  });
  console.log("Client secret", paymentIntent.client_secret)
  return res.status(200).json({clientSecret: paymentIntent.client_secret})
});

app.post("/payment-notification", (req, res, next) => {
  if (!req.body.paymentId) {
      return res.status(400).json({error: "no payment id present"});
  }
  QRCode.toDataURL(req.body.paymentId, function (err, url) {
      console.log("URL: ", url);
      // Use this data url to create an email and send it;
      return res.status(200).json({url});
    })
});


const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Server is listening on Port: ${PORT} `)
})