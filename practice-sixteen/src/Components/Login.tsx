import { useState } from "react";
import {useRecoilValue, useSetRecoilState} from "recoil";
import { userState } from "../States/userState";

const Login = () => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const userData = useRecoilValue(userState);

  const setUserState = useSetRecoilState(userState);

  const handleLogin = () => {
    if (email.trim() !== "admin@gmail.com" || password.trim() !== "123456") {
      return;
    }
    setUserState({
      "loggedIn": true,
      "email": email,
    });

    setEmail("");
    setPassword("");
  }

  const logoutUser = () => {
    setUserState({ loggedIn: false, email: "" });
  };

  return (
    <>
      {!userData.loggedIn ? (
        <form action="" className="flex flex-col gap-3 m-5">
          <input
            className="w-80 h-10 rounded border border-gray-400 pl-1.5 outline-gray-400"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Enter your email"
            value={email}/>
          <input
            className="w-80 h-10 rounded border border-gray-400 pl-1.5 outline-gray-400"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            value={password}/>
          <button
            className="w-80 h-10 rounded bg-blue-400 text-white"
            type="button"
            onClick={() => handleLogin()}>Login
          </button>
        </form>
      ) : (
        <button
          className="w-80 h-10 rounded bg-blue-400 text-white m-5"
          onClick={() => logoutUser()}
          type="button">Logout</button>
      )}
    </>
  );
}

export default Login;