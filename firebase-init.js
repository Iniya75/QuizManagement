// Firebase Initialization
const firebaseConfig = {
  apiKey: "AIzaSyDUUsHQVjJUI4TU4hbNNoO0x3AM9UEOHyU",
  authDomain: "quizquest-3d82a.firebaseapp.com",
  projectId: "quizquest-3d82a",
  storageBucket: "quizquest-3d82a.firebasestorage.app",
  messagingSenderId: "258935637691",
  appId: "1:258935637691:web:3e6b5af0ae7a4f022ecb9e",
  measurementId: "G-FRCW084FTV"
};

// Initialize Firebase App
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const db = firebase.firestore();
