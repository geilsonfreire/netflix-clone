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
import { toast } from "react-toastify";


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
        toast.error(error);
    }
}

const login = async (email, password) => {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        const user = res.user;
        if (user) {
            return user; 
        } else {
            throw new Error('Login failed');
        }
    } catch (error) {
        if (error.code === 'auth/too-many-requests') {
            throw Error('Acesso à conta temporariamente desativado. Tente novamente mais tarde ou resete sua senha.');
        } else if (error.code === 'auth/invalid-credential' || error.code === 'auth/invalid-email') {
            throw Error('Email ou senha inválida'); // Rethrow with a more specific message
        } else if (error.code === 'auth/wrong-password') {
            throw Error('Email ou senha inválida'); // Rethrow with a more specific message
        } else {
            throw error('Erro desconhecido. Por favor, tente novamente mais tarde.'); 
        }
    }
}

const logout = () => {
    signOut(auth);
}

export { signup, login, logout, auth, db };