import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore
    
 } from "../stores/auth";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (err: any) {
      setError(err.message || "Failed to log in");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-lg shadow-lg p-6"
      >
        <h2 className="text-2xl font-semibold mb-4 text-primary">Admin Sign In</h2>
        {error && <div className="text-red-500 mb-2">{error}</div>}
        <label className="block mb-2">
          <span className="text-sm font-medium">Email</span>
          <input
            type="email"
            required
            className="mt-1 block w-full border-gray-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="block mb-4">
          <span className="text-sm font-medium">Password</span>
          <input
            type="password"
            required
            className="mt-1 block w-full border-gray-300 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          type="submit"
          className="w-full py-2 bg-primary text-white rounded hover:bg-primary/90"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}