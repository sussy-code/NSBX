import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { getFirestore, collection, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-firestore.js";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA9mCP-ggkwspVdxusAWMAWTbFRU5uWf98",
  authDomain: "insidious-data.firebaseapp.com",
  projectId: "insidious-data",
  storageBucket: "insidious-data.appspot.com",
  messagingSenderId: "551748709974",
  appId: "1:551748709974:web:ff8cc5e10187a1c67d55f7",
  measurementId: "G-1SEWMKZFW5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore


function storePaste() {
  var pasteTitle = document.getElementById('paste-title').value;
  var pasteContent = document.getElementById('paste-content').value;
  console.log(pasteTitle, pasteContent)

  setDoc(doc(db, "pastes", "test"), {
    title: firstName.trim(),
    content: lastName.trim()
  })
}
// Doesnt work and makes me really mad