// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import { getStorage} from "firebase/storage";




// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKKwgO3vNhb5mGnz2IujjaTGHBmapDVW8",
    authDomain: "foodie-7bd7e.firebaseapp.com",
    databaseURL: "https://foodie-7bd7e-default-rtdb.firebaseio.com",
    projectId: "foodie-7bd7e",
    storageBucket: "foodie-7bd7e.appspot.com",
    messagingSenderId: "628866902466",
    appId: "1:628866902466:web:2a7d008b32440232d50e5b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage();
export const auth = getAuth(app);