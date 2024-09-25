import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDvFxqapNX9En-eLoDSwIRd0KduFxDDkNg",
    authDomain: "lab1-b173e.firebaseapp.com",
    projectId: "lab1-b173e",
    storageBucket: "lab1-b173e.appspot.com",
    messagingSenderId: "748993914336",
    appId: "1:748993914336:web:ae2090792a6ca8ca487785",
    measurementId: "G-66Z5CFL3LV"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app); // Khởi tạo Firestore

// Export Firestore and other services
export { db, analytics };