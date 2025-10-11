import { useNavigate } from "react-router-dom";

const MainPage = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/login");
  }

  return (
    <>
      <p onClick={ () => handleLogout() }>Logout</p>
    </>
  );
}

export default MainPage;