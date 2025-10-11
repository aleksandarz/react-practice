export const initialUserData = {
  username: "",
  isLoggedIn: false,
  loggedInTime: null,
}

export const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_USERNAME":
      return {...state, username: action.payload};
    case "SET_IS_LOGGED_IN":
      return {...state, isLoggedIn: action.payload};
    case "SET_LOGIN_TIME":
      return {...state, loggedInTime: action.payload};
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        username: "",
        email: "",
        password: "",
      };
    default:
      return state;
  }
}

export const getUserInitialData = () => {
  const userData = localStorage.getItem("userData");

  return userData ? JSON.parse(userData) : initialUserData;
}