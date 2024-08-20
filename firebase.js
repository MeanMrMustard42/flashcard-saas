// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJBCyQp_IRyDED4nMJFsxXdhRaknpxTHI",
  authDomain: "flashcard-saas-5bac0.firebaseapp.com",
  projectId: "flashcard-saas-5bac0",
  storageBucket: "flashcard-saas-5bac0.appspot.com",
  messagingSenderId: "216550988491",
  appId: "1:216550988491:web:cdf7b5e7ed9c1be553d94e",
  measurementId: "G-VCL9VB0F6F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);