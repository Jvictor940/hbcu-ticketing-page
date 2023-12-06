const express = require('express')
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc")
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

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


const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Server is listening on Port: ${PORT} `)
})