import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyABijazwCYyb2Upo16FVu7V7lyR5wMiz24",
    authDomain: "chatbot-f98d3.firebaseapp.com",
    projectId: "chatbot-f98d3",
    storageBucket: "chatbot-f98d3.appspot.com",
    messagingSenderId: "695917656845",
    appId: "1:695917656845:web:f082e310c7b7aa5ccc8e44"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
