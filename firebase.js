// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjg2jQLvxcCyx2iNg7dCmzo8s81fr4WIE",
  authDomain: "instagram-9a6e7.firebaseapp.com",
  projectId: "instagram-9a6e7",
  storageBucket: "instagram-9a6e7.appspot.com",
  messagingSenderId: "437067798746",
  appId: "1:437067798746:web:19a69a3f242fc3ff41ede3",
  measurementId: "${config.measurementId}",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
