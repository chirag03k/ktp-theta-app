import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCMQiUCQz5G8kwNW-KAt7QBytbMzsvIF4Q",
    authDomain: "ktp-theta-app.firebaseapp.com",
    databaseURL: "https://ktp-theta-app-default-rtdb.firebaseio.com",
    projectId: "ktp-theta-app",
    storageBucket: "ktp-theta-app.appspot.com",
    messagingSenderId: "254152905021",
    appId: "1:254152905021:web:e88e5bfa8be29dfc887554",
    measurementId: "G-ZXB6FY6HZQ"
};
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

