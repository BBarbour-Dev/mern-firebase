import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJe4GqSsJKDS-agdAM7098L33a8uWs5No",
  authDomain: "mern-firebase-a7f59.firebaseapp.com",
  projectId: "mern-firebase-a7f59",
  storageBucket: "mern-firebase-a7f59.appspot.com",
  messagingSenderId: "858650255886",
  appId: "1:858650255886:web:e4d376d765bacf5d0f125f"
};

initializeApp(firebaseConfig);

const auth = getAuth();

export default {
  auth
};
