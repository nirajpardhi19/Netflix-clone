// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyACdzJOkI6DpObdpIFvYWPnPaQExIge0P0",
  authDomain: "netflix-authentication-22c42.firebaseapp.com",
  projectId: "netflix-authentication-22c42",
  storageBucket: "netflix-authentication-22c42.appspot.com",
  messagingSenderId: "652924214468",
  appId: "1:652924214468:web:7158921ba36929119e7d91"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

//Authentication
export const auth = getAuth(app)

//Google Authentication
export const provider = new GoogleAuthProvider()