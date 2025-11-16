"use client"

import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

const AuthWatcher = () => {
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      const userData = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
      }
      localStorage.setItem("user", JSON.stringify(userData));
    } else {
      localStorage.removeItem("user");
    }
  }, [user, loading]);

  return null;
}

export default AuthWatcher;