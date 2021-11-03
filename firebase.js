// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj-hM5DeA6jZmONZWeKC9KJ5zP_RHKY3Q",
  authDomain: "instagram-clone-f2375.firebaseapp.com",
  projectId: "instagram-clone-f2375",
  storageBucket: "instagram-clone-f2375.appspot.com",
  messagingSenderId: "501755468270",
  appId: "1:501755468270:web:ffd49ef5b5229f2da896ff",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
