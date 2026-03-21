// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAYRUC2htqqREQashhJUYH882NvyZwjlk",
  authDomain: "quotation-app-fee5b.firebaseapp.com",
  projectId: "quotation-app-fee5b",
  storageBucket: "quotation-app-fee5b.firebasestorage.app",
  messagingSenderId: "516244672477",
  appId: "1:516244672477:web:6cc6836d312ede3a13b034"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
