const express = require('express')
const dotenv = require('dotenv')
dotenv.config({ path: './config/config.env' });
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
const bodyParser = require('body-parser')
const QRCode = require('qrcode')
const athlete = require('./routes/athlete');
const coach = require('./routes/coach');
const generalAdmission = require('./routes/generalAdmission');
// const cors = require('cors')
const logger = require('./middlewares/logger')
const errorHandler = require('./middlewares/error')
const connectDB = require('./config/db')


connectDB()

const app = express()

app.use(bodyParser.json());
// app.use(cors({
//   origin: '*'
// }))

app.use(logger)
app.use(errorHandler)
app.use('/athlete', athlete)
app.use('/coach', coach)
app.use('/generalAdmission', generalAdmission)

app.post("/payment-intent", async (req, res, next) => {
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