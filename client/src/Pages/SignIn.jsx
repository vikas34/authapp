import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      setSuccess(false);

      // Send an asynchronous POST request to the backend signup API endpoint
      const res = await fetch("/api/auth/signin", {
        // Define the HTTP method as POST (used to submit data)
        method: "POST",
        // Set request headers: telling the server we are sending JSON data
        headers: {
          "Content-Type": "application/json",
        },
        // Convert the formData object into a JSON string and send it as the request body
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);
      setLoading(false);

      if (data.success === false) {
        setError(true);
        return;
      }
      navigate("/");

      setSuccess(true);
      setFormData({
        username: "",
        email: "",
        password: "",
      }); // ✅ clear input fields here
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
          value={formData.email} // ✅ controlled input
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
          value={formData.password} // ✅ controlled input
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>

      <div className="flex gap-2 mt-5">
        <p>Don't have an account?</p>
        <Link to="/sign-up">
          <span className="text-blue-500">Sign Up</span>
        </Link>
      </div>

      {success && <p className="text-green-600 mt-5">Sign In successfully!</p>}

      {error && <p className="text-red-700 mt-5">Something went wrong!</p>}
    </div>
  );
}
