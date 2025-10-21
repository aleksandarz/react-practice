import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="felx flex-col gap-2.5 min-h-full items-center mx-auto">
        <h3 className="text-3xl">404 - Not found</h3>
        <Link to="/" className="text-blue-500">Home page</Link>
      </div>
    </>
  );
}

export default ErrorPage;