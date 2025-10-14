
export const EmailValidator = {
  required: "Email is required",
  minLength: {
    value: 10,
    message: "Email must be at least 10 characters",
  },
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Invalid email address"
  },
  validate: value => {
    if (value === "admin@gmail.com" || value === "test@gmail.com") {
      return "This email address is reserved and cannot be used";
    }
    if (!value.toLowerCase().endsWith("@gmail.com")) {
      return "Only Gmail addresses are allowed (must end with @gmail.com)";
    }
    return true;
  }
  // My solution
  // validate: value => {
  //   if (!value.includes("@")) {
  //     return "Invalid email address";
  //   }
  //   return true;
  // }
}