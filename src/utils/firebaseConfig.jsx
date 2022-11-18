// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestor";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCbas6cSv4SPgeXOmRDH3r-JkbKJiFAQl4",
    authDomain: "lika-shop-4a94a.firebaseapp.com",
    projectId: "lika-shop-4a94a",
    storageBucket: "lika-shop-4a94a.appspot.com",
    messagingSenderId: "254458284651",
    appId: "1:254458284651:web:20acf4d39d99201b51ff2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);