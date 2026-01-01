import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-2">404</h1>
      <p className="mb-4">Page not found</p>

      <Link to="/" className="text-blue-600 underline">
        Go to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;
