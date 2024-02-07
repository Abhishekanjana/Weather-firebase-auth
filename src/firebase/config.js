// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import {getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB3LUUTjxbpr69u0mGy6CR6AZUwY_IXuLU",
  authDomain: "create-web-app-6f7b8.firebaseapp.com",
  projectId: "create-web-app-6f7b8",
  storageBucket: "create-web-app-6f7b8.appspot.com",
  messagingSenderId: "1004270561764",
  appId: "1:1004270561764:web:3f0c08924efe115288fff1"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth };

 const db = getFirestore(app);
export { db };

