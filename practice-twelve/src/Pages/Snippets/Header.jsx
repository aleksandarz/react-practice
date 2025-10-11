import { Link } from "react-router-dom";
import { UserContext } from "../../index";
import { useContext } from "react";

const Header = () => {

  const { userState } = useContext(UserContext);

  return (
    <>
      <div className="flex gap-3">
        {userState.isLoggedIn && (
          <Link className="text-blue-500" to="/logout">Logout</Link>
        )}
        {!userState.isLoggedIn && (
          <Link className="text-blue-500" to="/login">Login</Link>
        )}
      </div>
    </>
  );
}

export default Header;