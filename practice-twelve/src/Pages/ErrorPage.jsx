import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="flex flex-col gap-1.5 m-5">
        <h3 className="text-3xl">404 - Not found</h3>
        <Link to="/" className="text-blue-600">Home page</Link>
      </div>
    </>
  );
}

export default ErrorPage;