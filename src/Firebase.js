// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBPMxpCxbZZ0dg_ZKmVYA4j1VC0xO8pp2w",
  authDomain: "clone2-5e581.firebaseapp.com",
  projectId: "clone2-5e581",
  storageBucket: "clone2-5e581.appspot.com",
  messagingSenderId: "314606236458",
  appId: "1:314606236458:web:c478fd8e75104c3d6b2453",
  measurementId: "G-53F1KMD7M5",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
