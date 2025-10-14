import { useForm } from "react-hook-form";
import { EmailValidator } from "../Validators/EmailValidator";
import { PasswordValidator } from "../Validators/PasswordValidator";

const LoginForm = () => {

  const { register, handleSubmit, formState: {errors} } = useForm();

  const onSubmitFunction = (data) => {
    console.log(data);
  }

  return (
    <>
      <form
        onSubmit={ handleSubmit(onSubmitFunction) }
        action=""
        className="flex flex-col gap-3 m-5">

        {errors.email && (
          <p className="text-red-500">{errors.email.message}</p>
        )}
        <input
          {...register("email", EmailValidator)}
          type="text"
          placeholder="Enter your email"
          className="w-96 h-10 rounded border border-gray-400 pl-1.5" />

        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
        <input
          {...register("password", PasswordValidator
            // **** My solution ****
            // if (!value.valueOf().trim()) {
            //   return "Password cannot be empty or only spaces/tabs!";
            // }
            // return true;
          )}
          type="password"
          placeholder="Enter your password"
          className="w-96 h-10 rounded border border-gray-400 pl-1.5" />

        <button
          type="submit"
          className="w-96 h-10 bg-blue-400 hover:bg-blue-600 text-white rounded">Login</button>
      </form>
    </>
  );
}

export default LoginForm;