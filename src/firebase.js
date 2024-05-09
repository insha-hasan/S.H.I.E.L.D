import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDC8ebiIOUlqb6JiAppKxHvZNJYAfAbx94",
  authDomain: "shield-app-b528f.firebaseapp.com",
  projectId: "shield-app-b528f",
  storageBucket: "shield-app-b528f.appspot.com",
  messagingSenderId: "1083588258840",
  appId: "1:1083588258840:web:af99a3a1c72c3f6325276d",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export { auth, db, storage };
