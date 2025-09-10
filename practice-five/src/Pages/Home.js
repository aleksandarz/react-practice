import Videos from "../Components/Videos";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Videos />
      <Link to="/video"></Link>
    </>
  );
}

export default Home;