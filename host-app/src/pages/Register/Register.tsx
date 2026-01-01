import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border p-6 rounded w-80">
        <h2 className="text-xl font-semibold mb-4">Registration Disabled</h2>

        <p className="text-sm mb-4">Please contact system administrator.</p>

        <button
          onClick={() => navigate("/login")}
          className="bg-blue-600 text-white px-4 py-2 w-full rounded"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default Register;
