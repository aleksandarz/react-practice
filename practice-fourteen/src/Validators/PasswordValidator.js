
export const PasswordValidator = {
  required: "Password is required",
  validate: (value) => {
    if (!value || value.trim() === "") {
      return "Password cannot be empty or only spaces/tabs!";
    }
    if (value === "admin" || value === "123456") {
      return "This password is reserved and cannot be used";
    }
    if (value.length < 5) {
      return "Password must be at least 5 characters";
    }
    if (value.length > 15) {
      return "Password can't be more than 15 characters";
    }
    if (!/[A-Z]/.test(value)) {
      return "Password must contain at least one uppercase letter";
    }
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value)) {
      return "Password must contain at least one special character";
    }
    return true;
  },
  // Previous version didn't show the error messages correctly
  // minLength: {
  //   value: 5,
  //   message: "Password must be at least 5 characters",
  // },
  // maxLength: {
  //   value: 16,
  //   message: "Password can't be more than 16 characters",
  // },
  // pattern: {
  //   // Must contain at least one upper case letter and one special character
  //   value: /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/,
  //   message: "Password must contain at least one uppercase letter and one special character",
  // },
  // validate: value => {
  //   if (value.trim() === "") {
  //     return "Password cannot be empty or only spaces/tabs!";
  //   }
  //   if (value === "admin" || value === "123456") {
  //     return "This password is reserved and cannot be used";
  //   }
  //   return true;
  // },
}