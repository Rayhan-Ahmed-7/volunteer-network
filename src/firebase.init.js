import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA6wm-i5V0bQSEqN0k-0sTFjVJAZiGKtfA",
  authDomain: "volunteer-network-eec12.firebaseapp.com",
  projectId: "volunteer-network-eec12",
  storageBucket: "volunteer-network-eec12.appspot.com",
  messagingSenderId: "265705155024",
  appId: "1:265705155024:web:f80c772a71787c69f8b1d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;