// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrMUVoYs13nr-6xowWUKjSPpUF7hF6Syw",
  authDomain: "ract-f51a3.firebaseapp.com",
  projectId: "ract-f51a3",
  storageBucket: "ract-f51a3.appspot.com",
  messagingSenderId: "263812738487",
  appId: "1:263812738487:web:ccae262ff1ed0ec604cc32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);