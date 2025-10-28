import { useRecoilValue, useSetRecoilState } from "recoil";
import { userState } from "../States/userState";
import { useForm } from "react-hook-form";

type LoginFormInputs = {
  email: string;
  password: string;
}

const Login = () => {

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const { register, handleSubmit, formState: { errors }, watch, reset, setError } = useForm<LoginFormInputs>();
  const email = watch("email", "");
  const password = watch("password", "");

  const userData = useRecoilValue(userState);

  const setUserState = useSetRecoilState(userState);

  const handleLogin = ({email, password}: LoginFormInputs) => {
    if (email.trim() !== "admin@gmail.com" || password.trim() !== "123456") {
      setError("root", {
        type: "manual",
        message: "Invalid email or password",
      })
      return;
    }
    setUserState({
      "loggedIn": true,
      "email": email,
    });

    reset();
  }

  const logoutUser = () => {
    setUserState({ loggedIn: false, email: "" });
  };

  return (
    <>
      {!userData.loggedIn ? (
        <form
          onSubmit={handleSubmit(handleLogin)}
          action=""
          className="flex flex-col gap-3 m-5">

          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: emailPattern,
                message: "Email format is not valid",
              },
            })}
            className="w-80 h-10 rounded border border-gray-400 pl-1.5 outline-gray-400"
            type="text"
            placeholder="Enter your email" />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must at least 6 characters long"
              },
            })}
            className="w-80 h-10 rounded border border-gray-400 pl-1.5 outline-gray-400"
            type="password"
            placeholder="Enter your password" />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          <button
            className="w-80 h-10 rounded bg-blue-400 text-white"
            type="submit">Login
          </button>

        </form>
      ) : (
        <button
          className="w-80 h-10 rounded bg-blue-400 text-white m-5"
          onClick={() => logoutUser()}
          type="button">Logout
        </button>
      )}
    </>
  );
}

export default Login;