// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// process.env.VITE_FIREBASE_API_KEY||

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-study-bacf5.firebaseapp.com",
  projectId: "mern-study-bacf5",
  storageBucket: "mern-study-bacf5.appspot.com",
  messagingSenderId: "1068052171665",
  appId: "1:1068052171665:web:ca53136c0112e92b8a6830"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
