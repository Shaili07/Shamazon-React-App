const functions = require("firebase-functions");

const express=require("express");
const cors=require("cors");
const stripe=require("stripe")('sk_test_51JNjaXSD8eZo8TTUs3GQc9CWZHJN0sjsc8DcDvw0mc8bAXe84LFEsoysTdd4QgBt7u4cZvt4SFJUGpr88j7La9AJ00LV3j7DjY');
//Express on a Cloud Function
//Setting up an API

//App config
const app=express();

//Middleware
app.use(cors({origin:true}));
app.use(express.json()); //send and retrieve data in JSON format

//API routes
app.get('/',(request,response)=>response.status(200).send('Hello World'));

app.post('/payments/create',async (request,response) => {
    const total=request.query.total;
    console.log('Payment request received!!',total);
    const paymentIntent=await stripe.paymentIntents.create(
        {
            amount:total,
            currency:"INR",
        }
    );
    response.status(201).send({clientSecret:paymentIntent.client_secret,});
});


//Listen command
exports.api=functions.https.onRequest(app);

