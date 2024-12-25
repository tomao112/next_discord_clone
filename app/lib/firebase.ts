import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDx3ZWGtvsi65RxqVdWJe7XaThe6Ghp6U",
  authDomain: "discord-clone-9cee5.firebaseapp.com",
  projectId: "discord-clone-9cee5",
  storageBucket: "discord-clone-9cee5.firebasestorage.app",
  messagingSenderId: "520212429621",
  appId: "1:520212429621:web:b8dcb7d5a55cf3dee3aa7c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };