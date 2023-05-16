// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAo5KHdjmeRhTxIR_uVZu6H2CXMd4UqFCo",
    authDomain: "ema-john-auth-firebase-9314d.firebaseapp.com",
    projectId: "ema-john-auth-firebase-9314d",
    storageBucket: "ema-john-auth-firebase-9314d.appspot.com",
    messagingSenderId: "453582819515",
    appId: "1:453582819515:web:9a2f95d3fea92dc61c999e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;