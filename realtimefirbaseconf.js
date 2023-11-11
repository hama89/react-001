
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBB-laZ6fQrsTKD2_nxO5hPvTJ8tEFwmxc",
  authDomain: "crud101-31818.firebaseapp.com",
  databaseURL: "https://crud101-31818-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "crud101-31818",
  storageBucket: "crud101-31818.appspot.com",
  messagingSenderId: "479280029571",
  appId: "1:479280029571:web:8f4226b057d7cada0d60b6"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);