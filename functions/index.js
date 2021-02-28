const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
	"sk_test_51IN3cdFCG7a6j4W1spqWG2wrkhdJ9Vos0gPXmEENrFmpmKXHcIV3Rz71uCH3ruatKrFla9OqiTfutqhkt39OB9HJ00iuQ44itS"
);

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
	const total = request.query.total;

	console.log("Payment Request Recieved for this amount >>> ", total);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total, // subunits of the currency
		currency: "usd",
	});

	// OK - Created
	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

// - Listen command
exports.api = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

//localhost:5001/clone2-5e581/us-central1/api
