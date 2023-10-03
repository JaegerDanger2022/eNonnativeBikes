import React, { useState } from "react"; 
import { auth } from "../utils/firebaseConfig";
import { useDispatch } from "react-redux";
import { onAuthStateChanged, User } from "@firebase/auth";
import { setLogin } from "../utils/redux/features/currentUserSlice"; 
import { storeData } from "../utils/AsyncStorage/StoreDate";

export function useAuthentication() {
  const dispatch = useDispatch();
  const [user, setUser] = useState();

  React.useEffect(() => {
    const unsubscribeFromAuthStatusChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
   
        setUser(user);
        dispatch(setLogin(user.uid));
        storeData('credentials',user.uid)
        // dispatch(setCredentials(user.uid));
      } else {
        // User is signed out
        setUser(undefined);
      }
    });

    return unsubscribeFromAuthStatusChanged;
  }, []);

  return {
    user,
  };
}
