import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 🔥 Replace with your actual Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCK_TCMIz661WaAsl3TKQsvkjvNsLcu9mI",
    authDomain: "lumina-1bfff.firebaseapp.com",
    projectId: "lumina-1bfff",
    storageBucket: "lumina-1bfff.firebasestorage.app",
    messagingSenderId: "716537220717",
    appId: "1:716537220717:web:e37f4259db59d4bc06b964",
    measurementId: "G-YP9NRNJDFR"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
