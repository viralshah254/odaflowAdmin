import { useState } from 'react';
import { IoEyeOff, IoEye } from 'react-icons/io5';
// Optionally add an illustration asset:
// import AuthIllustration from '../assets/auth-illustration.png';

export default function SignIn() {
  const [phone, setPhone] = useState('+254');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || !password) {
      setError('Phone number and password are required');
    } else {
      setError('');
      console.log('Signing in', { phone, password });
      // TODO: perform actual sign-in and on success set localStorage authToken
      localStorage.setItem('authToken', 'dummy');
      window.location.replace('/');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="OdaFlow Logo" className="h-10 w-10" />
          <span className="text-lg font-semibold text-oda-blue">OdaFlow</span>
        </div>
        <form onSubmit={handleSubmit} className="flex items-center space-x-4">
          {/* Phone */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-600">+254</span>
            <input
              type="tel"
              value={phone.replace(/^\+254/, '')}
              onChange={e => {
                const nums = e.target.value.replace(/\D/g, '').slice(0, 9);
                setPhone(`+254${nums}`);
              }}
              className="pl-12 pr-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-oda-blue"
              placeholder="7XXX"
            />
          </div>
          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="pr-8 pl-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-oda-blue"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-1 flex items-center text-gray-600"
              tabIndex={-1}
            >
              {showPassword ? <IoEyeOff /> : <IoEye />}
            </button>
          </div>
          <button
            type="submit"
            className="bg-oda-blue text-white px-4 py-1 rounded hover:bg-opacity-90 transition"
          >
            Sign In
          </button>
        </form>
      </nav>
    </div>
  );
}