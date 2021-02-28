import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// const functions = require("firebase-functions");

// const express = require("express");
// const cors = require("cors");
// const { default: SubTotal } = require("../Amazon-clone-main/src/SubTotal");
// const stripe = require("stripe")(
//   "sk_test_51IN3cdFCG7a6j4W1spqWG2wrkhdJ9Vos0gPXmEENrFmpmKXHcIV3Rz71uCH3ruatKrFla9OqiTfutqhkt39OB9HJ00iuQ44itS"
// );

// const app = express();

// app.use(cors({ origin: true }));
// app.use(express.json());

// app.get("/", (request, response) => response.status(200).send("hello world"));
// app.post("/payment/create", async (request, response) => {
//   const total = request.query.total;
//   console.log("payment Request Recived for this amount>>>", total);
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: total,
//     currency: "usd",
//   });
//   response.status(201).send({
//     clientSecret: paymentIntent.client_secret,
//   });
// });

// exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone2-5e581/us-central1/api
