// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, setDoc, getDoc, doc, collection, writeBatch } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBvpN256wpUpISf5yJwXJRsMH2o7pC0evA",
  authDomain: "crwnclothns.firebaseapp.com",
  projectId: "crwnclothns",
  storageBucket: "crwnclothns.appspot.com",
  messagingSenderId: "298305994028",
  appId: "1:298305994028:web:1b38fc3a5da3a608c58089"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Firebase storage
export const db = getFirestore(app)

// Google auth services from firebase
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  'prompt': "select_account"
});

export const signInWithGoogle = () => signInWithPopup(auth, provider);

/* ============================================================================ */

// Storing user in the fire store database
export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // if userAuth create a document called users in it a file with userAuth uid
  const usersRef = doc(db, `users/${userAuth.uid}`)

  // get the user info
  const snapShot = await getDoc(usersRef)

  // if user doesn't exist create a new user.
  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date().toISOString();

    try {
      await setDoc(usersRef, {
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  // return the userRef
  return usersRef;
}

/* ============================================================================================ */

export default app;