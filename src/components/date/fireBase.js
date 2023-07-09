// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQAJWheBuKKcthr84DHTJba8OtcVOVDHc",
  authDomain: "notes-firebase-dce6d.firebaseapp.com",
  projectId: "notes-firebase-dce6d",
  storageBucket: "notes-firebase-dce6d.appspot.com",
  messagingSenderId: "600497867315",
  appId: "1:600497867315:web:b1343bb37f0a0315d87146",
  measurementId: "G-JCZCKWDQPD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

