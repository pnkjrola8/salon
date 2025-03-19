import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDhkX2iGByXe_iO8PZiQHZk9xDEt3p3Dr8",
    authDomain: "salon-booking-system-e8630.firebaseapp.com",
    projectId: "salon-booking-system-e8630",
    storageBucket: "salon-booking-system-e8630.firebasestorage.app",
    messagingSenderId: "973634854822",
    appId: "1:973634854822:web:5c30f3e87dd8442f803967"
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };