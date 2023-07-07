
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBtZxWmGdBCqBA5neZFAOoGK6ASUkJKlqY",
    authDomain: "proyecto-final-react-e1f09.firebaseapp.com",
    projectId: "proyecto-final-react-e1f09",
    storageBucket: "proyecto-final-react-e1f09.appspot.com",
    messagingSenderId: "301007266568",
    appId: "1:301007266568:web:965dc18d9deb0fb6c202bd"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);