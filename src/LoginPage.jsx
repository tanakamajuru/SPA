import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    navigate('/password', { state: { email } });
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    // Handle password submission logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Logo />
      <form onSubmit={handleEmailSubmit} className="bg-white p-6 rounded shadow-md mb-4">
        <h1 className="text-2xl font-bold mb-4">Sign in</h1>
        <input
          type="email"
          placeholder="Email or phone"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full mb-4"
          required
        />
        <button type="submit" className="bg-blue-500 text-white py-2 rounded w-full">Next</button>
      </form>

      <form onSubmit={handlePasswordSubmit} className="bg-white p-6 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Enter your password</h1>
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full mb-4"
          required
        />
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="showPassword"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
            className="mr-2"
          />
          <label htmlFor="showPassword">Show password</label>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 rounded w-full">Sign in</button>
      </form>
    </div>
  );
}

export default SignInPage;