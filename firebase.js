// Import the functions you need from the Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoTLasTyhcIn5HY6FBcdZAyHgTghMu_2E",
  authDomain: "event-termz.firebaseapp.com",
  projectId: "event-termz",
  storageBucket: "event-termz.firebasestorage.app",
  messagingSenderId: "860940352552",
  appId: "1:860940352552:web:26e5fdfbc253b6eb70c91d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth and firestore so they can be used in other files
export const auth = getAuth(app);
export const db = getFirestore(app);
