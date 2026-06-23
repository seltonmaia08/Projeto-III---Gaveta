
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAbEmowrMwJqnaD5s_8AZ1kt5n9s7usQL0",
  authDomain: "gaveta-27-00.firebaseapp.com",
  projectId: "gaveta-27-00",
  storageBucket: "gaveta-27-00.firebasestorage.app",
  messagingSenderId: "1089001491848",
  appId: "1:1089001491848:web:0a2617f6b944f3839c7e3d",
  measurementId: "G-CT81YMPXRP"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)