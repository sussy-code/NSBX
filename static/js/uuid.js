import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  runTransaction,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9mCP-ggkwspVdxusAWMAWTbFRU5uWf98",
  authDomain: "insidious-data.firebaseapp.com",
  projectId: "insidious-data",
  storageBucket: "insidious-data.appspot.com",
  messagingSenderId: "551748709974",
  appId: "1:551748709974:web:ff8cc5e10187a1c67d55f7",
  measurementId: "G-1SEWMKZFW5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore
const ALPHABET =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function generateRandomString(length) {
  let result = "";
  const alphabetLength = ALPHABET.length;
  for (let i = 0; i < length; i++) {
    result += ALPHABET.charAt(Math.floor(Math.random() * alphabetLength));
  }
  return result;
}

const generateUUIDKey = async () => {
  let uuid = generateRandomString(8);

  try {
    const generatedUUID = await runTransaction(db, async (transaction) => {
      const docRef = doc(db, "form-ids", uuid);
      const docSnapshot = await transaction.get(docRef);

      // Check if the document already exists
      if (docSnapshot.exists()) {
        uuid = generateRandomString(8);
        return null;
      } else {
        // If the document does not exist, set the document
        transaction.set(docRef, {});
        return uuid;
      }
    });

    if (generatedUUID) {
      return generatedUUID;
    } else {
      // If the generated UUID was not unique, retry
      return await generateUUIDKey();
    }
  } catch (error) {
    console.error("Error generating UUID:", error);
    return null;
  }
};

generateUUIDKey().then((uuid) => {
  if (uuid) {
    console.log("Generated UUID:", uuid);
  } else {
    console.log("Failed to generate a unique UUID. Please try again.");
  }
});
