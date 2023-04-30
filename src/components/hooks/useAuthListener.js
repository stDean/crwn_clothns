import { useState, useEffect } from "react";
import { auth, createUserProfile } from "../../services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";

export const useAuthListener = () => {
  const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('userAuth')));

  useEffect(() => {
    const listener = onAuthStateChanged(auth, async userAuth => {
      if (userAuth) {
        // create the user or get the user and save it in the variable userRef
        const userRef = await createUserProfile(userAuth);

        // this listener to receive the data and then set it to the current user state.
        onSnapshot(userRef, snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          });
        });
      } else {
        // set it to null from the state.
        setCurrentUser(userAuth);
      }
    });
    return () => listener();
  }, [auth]);

  return { currentUser }
}