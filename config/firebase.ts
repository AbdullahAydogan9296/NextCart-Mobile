import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase yapılandırma bilgileri
const firebaseConfig = {
    apiKey: "AIzaSyBSu0NqUzPLdjH03Mhh7Nlnl3NjhWTmraE",
    authDomain: "nextcart-mobile.firebaseapp.com",
    projectId: "nextcart-mobile",
    storageBucket: "nextcart-mobile.firebasestorage.app",
    messagingSenderId: "185133361106",
    appId: "1:185133361106:web:f3aefca0fcba99a0a7ca0b",
    measurementId: "G-633FTJXR2S"
};

// Firebase'i başlat
const app = initializeApp(firebaseConfig);

// Auth ve Firestore servislerini al
export const auth = getAuth(app);
export const db = getFirestore(app);

// Firebase Auth'un hazır olduğundan emin ol
auth.useDeviceLanguage(); // Tarayıcı dilini kullan 