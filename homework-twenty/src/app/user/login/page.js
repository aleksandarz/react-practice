"use client"

import { useState } from "react";

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    if (username.trim() === "" || password.trim() === "") {
      alert("Please enter a valid username and password");
      return;
    }

    const response = await fetch("/api/authUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    });
    const data = await response.json();
    console.log(data);

    if (response.status !== 200) {
      alert("Error: Try again");
      return;
    }

    localStorage.setItem("token", data.token);

    setUsername("");
    setPassword("");
  }

  return (
    <>
      <form action="">
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          placeholder="Enter your username" />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Enter your password" />
        <button
          type="button"
          onClick={ () => loginUser() }>Login
        </button>
      </form>
    </>
  );
}

export default Login;