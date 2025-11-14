import * as functions from "firebase-functions";
import { admin } from "./firebaseAdmin";

export const helloWorld = functions.https.onRequest((req, res) => {
  res.send("Hello from Firebase!");
});
