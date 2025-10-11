import { useContext, useEffect } from "react";
import { UserContext } from "../../index";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
  const { userState, userDispatch } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userState.isLoggedIn) {
      localStorage.removeItem("userData");

      userDispatch({ type: "LOGOUT" });
    }

    navigate("/login");
  }, [userState, userDispatch, navigate]);

  return null;
};

export default LogoutPage;
