import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { onSnapshot } from "firebase/firestore";
import { useSelector, useDispatch } from "react-redux";

import { auth, createUserProfile } from "../services/firebase";
import { SET_CURRENT_USER } from "../redux/user/user.slice";

export const useAuthListener = () => {

  const user = useSelector(({ user }) => user.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const listener = onAuthStateChanged(auth, async userAuth => {
      if (userAuth) {
        // create the user or get the user and save it in the variable userRef
        const userRef = await createUserProfile(userAuth);

        // this listener to receive the data and then set it to the current user state.
        onSnapshot(userRef, snapshot => {
          dispatch(SET_CURRENT_USER({
            id: snapshot.id,
            ...snapshot.data()
          }))
        });
      } else {
        // set it to null from the state.
        dispatch(SET_CURRENT_USER(user))
      }
    });
    return () => listener();
  }, [auth]);

  return { user }
}