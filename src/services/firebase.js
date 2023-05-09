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

  // if userAuth get the user from the collection of users in the db
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

  // return the userRef if the user exists
  return usersRef;
}

/* ============================================================================================ */

// Adding the SHOP Json to our firebase one time only
export const addCollectionsAndDocuments = async (collectionKey, objectsToAdd) => {
  // create a collection in fire store with the name of argument passed
  const collectionRef = collection(db, collectionKey)

  const batch = writeBatch(db);

  // for each of the the content in the array to add to the collection create a document in the collection
  objectsToAdd.forEach(obj => {
    const newDocRef = doc(collectionRef)

    // this takes the document ref and then the data to add
    batch.set(newDocRef, obj)
  });

  // add all the writes to the db as a single unit
  return await batch.commit();
}

/* ============================================================================================ */

// Getting the SHOP collections from firebase
// then convert it to an object
export const convertCollectionSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data()

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  // converting the array of collection back to an object.
  // e.g {hats: collections, sneakers: collection}
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});

}

export default app;
