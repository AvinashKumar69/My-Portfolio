// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ0elMIWcZbwjWVKSqKpltuPzqux2BqqA",
  authDomain: "portfolio2023-ffac1.firebaseapp.com",
  projectId: "portfolio2023-ffac1",
  storageBucket: "portfolio2023-ffac1.appspot.com",
  messagingSenderId: "138973834325",
  appId: "1:138973834325:web:ca565b4a9cb636fefa38dc",
  measurementId: "G-EGDFW41LMX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
