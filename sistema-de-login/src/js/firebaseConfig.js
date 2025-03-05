import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCH3_ndzJ2kxarmBALrTRro5s5VfkrHM0Y",
    authDomain: "sistemade-login.firebaseapp.com",
    projectId: "sistemade-login",
    storageBucket: "sistemade-login.firebasestorage.app",
    messagingSenderId: "422210401125",
    appId: "1:422210401125:web:380fc1ea1b46800fa3678c",
    measurementId: "G-T5XDSSLWFQ"
  };

  // Initialize Firebase
// 🔹 Verifica se já existe uma instância antes de inicializar
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const analytics = getAnalytics(app);
const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
export { auth, GoogleAuthProvider};
export default app;