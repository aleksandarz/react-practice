import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <div>404 Not found</div>
      <Link to="/">Home page</Link>
    </>
  );
}

export default NotFoundPage;