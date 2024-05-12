// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwuKscuXUF8cfBNUy_lH2eqZ4oCQ92HXo",
  authDomain: "electronic-repair-house.firebaseapp.com",
  projectId: "electronic-repair-house",
  storageBucket: "electronic-repair-house.appspot.com",
  messagingSenderId: "268640803869",
  appId: "1:268640803869:web:00669bab7b7e7c1a9efaf4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);