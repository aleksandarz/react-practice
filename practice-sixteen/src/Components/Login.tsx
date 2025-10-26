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
        <form action="">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Enter your email"
            value={email}/>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            value={password}/>
          <button type="button" onClick={() => handleLogin()}>Login</button>
        </form>
      ) : (
        <button type="button" onClick={ () => logoutUser() }>Logout</button>
      )}
    </>
  );
}

export default Login;