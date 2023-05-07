// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore }from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5JndG1JGAjK1R1jz5w86yA2J-hlFeFME",
  authDomain: "nest-flip.firebaseapp.com",
  projectId: "nest-flip",
  storageBucket: "nest-flip.appspot.com",
  messagingSenderId: "346377920256",
  appId: "1:346377920256:web:c42d52efbb69fda3a61de5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()