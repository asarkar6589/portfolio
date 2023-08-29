import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDIpZC5FZBMyeUUzwPx7Pmgc0Th-47XbUU",
    authDomain: "arnab-portfolio-7a1d0.firebaseapp.com",
    projectId: "arnab-portfolio-7a1d0",
    storageBucket: "arnab-portfolio-7a1d0.appspot.com",
    messagingSenderId: "449427270485",
    appId: "1:449427270485:web:458fe2282dd52c27ed9ddc"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();