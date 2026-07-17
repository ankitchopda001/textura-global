import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
  const token = localStorage.getItem("token");

  if (token) {
    navigate("/admin");
  }
}, [navigate]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await axios.post(
        "http://127.0.0.1:10000/api/auth/login",
        {
          username,
          password,
        }
      );

      // Save JWT Token
      localStorage.setItem(
        "token",
        response.data.access_token
      );

    toast.success("Login Successful");

      navigate("/admin");
    } catch (error) {
      console.error(error);

      toast.error("Invalid Username or Password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex justify-center items-center px-4">

      <div className="bg-slate-900 p-10 rounded-3xl w-full max-w-md shadow-2xl">

        <h1 className="text-4xl font-bold text-yellow-400 text-center mb-8">
          Admin Login
        </h1>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-800 text-white outline-none border border-slate-700 focus:border-yellow-400"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 rounded-xl bg-slate-800 text-white outline-none border border-slate-700 focus:border-yellow-400"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-400 hover:bg-yellow-300 text-black py-4 rounded-xl font-bold transition disabled:opacity-60"
          >
            {loading ? "Logging In..." : "Login"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;