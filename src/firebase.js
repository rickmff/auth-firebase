import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-RFVlk0rinJCRxZtqtEruRAaxotG-Ock",
  authDomain: "auth-firebase-f3307.firebaseapp.com",
  projectId: "auth-firebase-f3307",
  storageBucket: "auth-firebase-f3307.appspot.com",
  messagingSenderId: "863115563065",
  appId: "1:863115563065:web:8060ed4e8493d3c3c2fde8",
  measurementId: "G-CHY36B2CGZ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
