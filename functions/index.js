const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Mpsa8SBM4PvcUomm1zWuq4ZDl6cmuV4DWBAvVa1cOJGFevXXqpzl4Db5N2FJ4rcZOZjk6pyofp0Oze6jO9jQ3Ks00DH7rrxhr"
);

//api

// - App config
const app = express();

// - middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - Api routes
app.get('/',(request,response) => response.status(200).send('Hello '))

app.post('/payments/create',async (request,response) => {
    const total = request.query.total;

    console.log('payment request recieved BOOM!! >>>>> ',total);

    const paymentIntent = await stripe.paymentIntent.create({
        amount : total, //sub uints of the currency that means paisa
        currency : "Rupees",
    });

    //ok - created
    response.status(201).send({
        clientSecret : paymentIntent.client_secret,
    })
})

// - Listen command
exports.api = functions.https.onRequest(app)

//Example endpoint
//http://127.0.0.1:5001/clone-fa01d/us-central1/api