import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDS0i-OfrWl-HUpwCGUT4zt6xgcExeyFcY",
  authDomain: "fptshop-eaa55.firebaseapp.com",
  projectId: "fptshop-eaa55",
  storageBucket: "fptshop-eaa55.appspot.com",
  messagingSenderId: "470736680462",
  appId: "1:470736680462:web:777258dc80ed17fdeeae5f",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
