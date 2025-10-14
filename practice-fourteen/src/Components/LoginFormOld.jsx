import { useState } from "react";

const LoginFormOld = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const checkPassword = () => {
    if (!password.trim()) {
      setErrorMessage("Password cannot be empty or only spaces/tabs!");
      return;
    }

    setErrorMessage("");
    setUsername("");
    setPassword("");
  };


  console.log(username, password);

  return (
    <>
      <form action="" className="flex flex-col gap-3 m-5 items-center">
        <input type="text"
               onChange={ (e) => setUsername(e.target.value) }
               value={ username }
               placeholder="Username"
               className="w-96 h-10 rounded border border-gray-400 pl-1.5" />
        {errorMessage && (
          <p className="text-red-400">{ errorMessage }</p>
        )}
        <input type="password"
               onChange={ (e) => setPassword(e.target.value) }
               value={ password }
               placeholder="Password"
               className="w-96 h-10 rounded border border-gray-400 pl-1.5" />
        <button type="button"
                onClick={ () => checkPassword() }
                className="w-96 h-10 bg-blue-400 hover:bg-blue-600 text-white rounded">Login</button>
      </form>
    </>
  );
}

export default LoginFormOld;