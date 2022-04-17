// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3BkvjlKGf7-xjGqtzq8oIGvomqPBs2oA",
  authDomain: "travego-70ecd.firebaseapp.com",
  projectId: "travego-70ecd",
  storageBucket: "travego-70ecd.appspot.com",
  messagingSenderId: "832851797075",
  appId: "1:832851797075:web:6df8e4130f90763f7892a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
