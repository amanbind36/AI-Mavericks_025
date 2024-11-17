// src/firebase.jsx
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbGuxaOJXK4tHnn2tUJjetP76XRqNzTcc",
  authDomain: "hack-hurdles-036.firebaseapp.com",
  databaseURL: "https://hack-hurdles-036-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "hack-hurdles-036",
  storageBucket: "hack-hurdles-036.appspot.com",
  messagingSenderId: "832224531387",
  appId: "1:832224531387:web:88361bcccc83c6de4bea9e"
};

// Initialize Firebase only if no apps are already initialized
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };