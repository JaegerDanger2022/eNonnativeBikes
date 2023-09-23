// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1UudIaZ--puEU5olqmGjGIMMLvBnR4ew",
  authDomain: "ennonativebikes.firebaseapp.com",
  projectId: "ennonativebikes",
  storageBucket: "ennonativebikes.appspot.com",
  messagingSenderId: "510138489232",
  appId: "1:510138489232:web:250472e06dc920c1e57b15",
  measurementId: "G-1K2N5XJ1E9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
