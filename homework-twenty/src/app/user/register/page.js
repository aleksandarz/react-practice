"use client"

import { auth } from "@/app/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(auth);

  const register = async (email, password) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    setEmail("");
    setPassword("");
  }

  return (
    <>
      <input
        type="text"
        placeholder="Enter your email"
        onChange={ (e) => setEmail(e.target.value) }
        value={ email } />
      <input
        type="password"
        placeholder="Enter your password"
        onChange={ (e) => setPassword(e.target.value) }
        value={ password } />
      <button
        type="button"
        onClick={ () => register(email, password) }>Register
      </button>
    </>
  );
}

export default Register;