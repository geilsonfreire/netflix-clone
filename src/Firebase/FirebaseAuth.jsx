import { initializeApp } from "firebase/app";

import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";

import { 
    addDoc, 
    collection, 
    getFirestore 
} from "firebase/firestore";


// Meu projeto do Firebase web authentication
const firebaseConfig = {
    apiKey: "AIzaSyAuxrDCNI6aB20qi6jE7kNy4lyyNqO-qys",
    authDomain: "netflix-clone-9e1f2.firebaseapp.com",
    projectId: "netflix-clone-9e1f2",
    storageBucket: "netflix-clone-9e1f2.appspot.com",
    messagingSenderId: "950970207388",
    appId: "1:950970207388:web:0cbd972d3f980fa6b1b159",
    measurementId: "G-VEYS0QLBRL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  // Firebase Authentication
const db = getFirestore(app);   // Firestore Database

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error) {
        return error;
        console.error(error);
        alert(error.message);
    }
}

const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        return error;
        console.error(error);
        alert(error.message);
    }
}

const logout = () => {
    signOut(auth);
}

export { signup, login, logout, auth, db };