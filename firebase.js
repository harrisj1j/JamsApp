// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCU8G0ldidWb-K9jCiGM3PmAYKrAiFfWtc",
  authDomain: "jamsam-84ed7.firebaseapp.com",
  projectId: "jamsam-84ed7",
  storageBucket: "jamsam-84ed7.appspot.com",
  messagingSenderId: "1098813294533",
  appId: "1:1098813294533:web:efa54336fb0aca3c686dac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);