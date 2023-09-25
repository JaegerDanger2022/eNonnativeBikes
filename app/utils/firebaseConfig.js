// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1-Va_Zo22N-OLMpzsLbt4IEmHhsI893E",
  authDomain: "enonnativebikes-9555d.firebaseapp.com",
  projectId: "enonnativebikes-9555d",
  storageBucket: "enonnativebikes-9555d.appspot.com",
  messagingSenderId: "441176183918",
  appId: "1:441176183918:web:0efe56afa183e8904a027f",
  measurementId: "G-68EYWZW3LT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const db = getFirestore(app);

  const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { auth };