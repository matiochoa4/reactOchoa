import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAPCvYT7kAgKQ5eg4vdddBWVnn0DYLZtKM",
    authDomain: "reactjs-ochoa.firebaseapp.com",
    projectId: "reactjs-ochoa",
    storageBucket: "reactjs-ochoa.appspot.com",
    messagingSenderId: "758887615510",
    appId: "1:758887615510:web:2530646c6bc315fc8cf937",
    measurementId: "G-S4X9SG2JT3"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
