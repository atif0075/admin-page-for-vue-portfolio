
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: "portfolio-content-f24c6.firebaseapp.com",
    projectId: "portfolio-content-f24c6",
    storageBucket: "portfolio-content-f24c6.appspot.com",
    messagingSenderId: "22462859423",
    appId: "1:22462859423:web:480b4a72914fd9c5f3faaa",
};

initializeApp(firebaseConfig)

const db = getFirestore();

export { db }