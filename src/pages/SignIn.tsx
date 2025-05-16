import { useState } from 'react';
import { IoEyeOff, IoEye } from 'react-icons/io5';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: call your auth API
    if (!email || !password) {
      setError('Email and password are required');
    } else {
      setError('');
      // e.g. fetch('/api/admin/signin', { email, password })...
      console.log('Signing in', { email, password });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 rounded-lg shadow-xl border border-gray-200 w-full max-w-sm space-y-8"
      >
        <div className="flex justify-center mb-2">
          <img src="/logo192.png" alt="OdaFlow Logo" className="h-16 w-16" />
        </div>
        <h1 className="text-2xl font-semibold mb-6 text-center text-oda-blue">OdaFlow Admin</h1>

        {error && (
          <div className="w-full mb-4 px-4 py-2 bg-red-50 text-red-700 border border-red-200 rounded">
            {error}
          </div>
        )}

        <label className="block mb-1 text-sm font-medium">Email</label>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-oda-blue focus:border-transparent transition"
          placeholder="admin@odaflow.com"
        />

        <label className="block mb-1 text-sm font-medium">Password</label>
        <div className="relative w-full mb-4">
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-oda-blue focus:border-transparent transition"
            placeholder="••••••••"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
            tabIndex={-1}
          >
            {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
          </button>
        </div>

        <div className="flex items-center justify-between text-sm mt-4 mb-6">
          <label className="inline-flex items-center space-x-2">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-oda-blue" />
            <span className="text-gray-600">Remember me</span>
          </label>
          <a href="#" className="text-oda-blue hover:underline">Forgot password?</a>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-oda-blue to-blue-600 text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}