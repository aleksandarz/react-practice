import users from "../Data/users.json";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../index";

const LoginPage = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const { userState, userDispatch } = useContext(UserContext);

  const navigate = useNavigate();

  const checkUserData = () => {
    const foundUser = users.find(
      (user) =>
        user.username === name.trim() &&
        user.email === email.trim() &&
        user.password === password
    );

    if (foundUser) {
      setMessage("Login successful!");
      console.log("Login successful:", foundUser);
      userDispatch({ type: "SET_USERNAME", payload: name });
      userDispatch({ type: "SET_IS_LOGGED_IN", payload: true });
      userDispatch({
        type: "SET_LOGIN_TIME",
        payload: new Date().toLocaleTimeString("en-GB", {
          hour12: false,
        }),
      });
      navigate("/main");
    } else {
      setMessage("Invalid credentials. Try again.");
    }
  }

  useEffect(() => {
    if (userState.isLoggedIn) {
      localStorage.setItem("userData", JSON.stringify(userState));
    }
  }, [userState]);

  return (
    <>
      <Link to="/" className="m-3 text-blue-600">Home page</Link>
      <div className="flex flex-col w-full min-h-screen items-center justify-center">
        <form action="" className="flex flex-col gap-3">
          <h3 className="text-3xl">Login</h3>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            className="w-96 h-10 rounded border border-gray-400 outline-gray-400 pl-1.5" />
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-96 h-10 rounded border border-gray-400 outline-gray-400 pl-1.5" />
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-96 h-10 rounded border border-gray-400 outline-gray-400 pl-1.5" />
          <button
            type="button"
            className="w-96 h-10 rounded bg-cyan-300 text-white hover:bg-cyan-600 transition duration-300"
            onClick={ () => checkUserData() }>Login</button>
          {message && (
            <div
              className={`w-96 text-center p-2 rounded ${
                message.includes("Invalid") || message.includes("Please")
                  ? "bg-red-200 text-red-800"
                  : "bg-green-200 text-green-800"
              }`}
            >
              {message}
            </div>
          )}
        </form>
      </div>
    </>
  );
}

export default LoginPage;