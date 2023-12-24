const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const QRCode = require('qrcode')
const athlete = require('./routes/athlete');
const coach = require('./routes/coach');
const guardian = require('./routes/guardian');
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const cors = require('cors')
const logger = require('./middlewares/logger')
const errorHandler = require('./middlewares/error')
const connectDB = require('./config/db')


dotenv.config({ path: './config/config.env' });
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || 'key-yourkeyhere' });

connectDB()

const app = express()
app.use(express.json()); // no longer need bodyParser, express now includes it's own implementation. I am using this at the top because when I put bodyParser at the bottom it fixed my prior issue with Stripe && Mailgun but gave me issues posting to my backend. I need a parser at the top to parse information before it hits my endpoint. 

app.use(cors({
  origin: '*'
}))

app.use(logger)
app.use(errorHandler)
app.use('/athlete', athlete)
app.use('/coach', coach)
app.use('/guardian', guardian)

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

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = process.env.ENDPOINT_SECRET;

app.post('/webhook', express.raw({type: 'application/json'}), async (request, response) => {
  console.log('inside webhook')
    const sig = request.headers['stripe-signature'];
    
    console.log('fire')
    let event;
    
    try {
        console.log('inside try block')
        event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
        console.log('event', event)
    } catch (err) {
        console.log('hit the error block')
        response.status(400).send(`Webhook Error: ${err.message}`);
        console.log('error', err.message)
        return;
    }
    
    // Handle the event
    switch (event.type) {
    //     case 'charge.succeeded':
    //     const chargeSucceeded = event.data.object;
    //     const userEmail = chargeSucceeded.billing_details.email;

    //     console.log('user email 1', chargeSucceeded.billing_details.email)
    //     console.log('user email 2', chargeSucceeded.receipt_email)

    // //  Send the email using Mailgun
    //   try {
    //       await sendPaymentSuccessEmail(userEmail)
    //       console.log('Email sent for payment success to:', userEmail)
    //   } catch (err) {
    //     console.log('Error sending email:', err)
    //     response.status(500).send('Error sending email')
    //   }
    //     break;
    case 'payment_intent.succeeded':
      const paymentIntentSucceeded = event.data.object;
      const userEmail = paymentIntentSucceeded.receipt_email;
      // console.log('paymentIntent', paymentIntentSucceeded)

     // Send the email using Mailgun
      try {
        await sendPaymentSuccessEmail(userEmail)
        console.log('Email sent for payment success to:', userEmail)
      } catch (err) {
        console.log('Error sending email:', err)
        response.status(500).send('Error sending email')
      }
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
});

async function sendPaymentSuccessEmail(userEmail) {
    console.log('Payment Successful, sending message...')
   await mg.messages 
        .create(process.env.SANDBOX , {
            from:  "<jvictor940@gmail.com>",
            to: userEmail,
            subject: "Succesfull Payment",
            text: "Payment Succeeded, Congrats!",
        })
        .then(msg => console.log("Success log", msg)) // logs response data
        .catch(err => console.log("Error log" , err)); // logs any error`;
}


app.post('/confirm', (req, res, next) => {
    console.log('sending message...')
    mg.messages 
        .create(process.env.SANDBOX , {
            from:  "<jvictor940@gmail.com>",
            to: ["jvictor@hbcusportssummit.com"],
            subject: "Hello",
            text: "Testing Mailgun from confirm endpoint!",
        })
        .then(msg => console.log("Success log", msg)) // logs response data
        .catch(err => console.log("Error log" , err)); // logs any error`;
})
  
app.use(bodyParser.json())


const PORT = process.env.PORT || 4000

const server = app.listen(PORT, () => {
    console.log(`Server is listening on Port: ${PORT} `)
})

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`)
  server.close(() => process.exit(1))
})