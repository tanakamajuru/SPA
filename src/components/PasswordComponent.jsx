import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function PasswordPage() {
  const { state } = useLocation();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    
    <div className="h-screen bg-gray-100">
     
      <form className="bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Welcome</h1>
      
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 rounded p-2 w-full mb-4"
          required
        />
        <div className="items-center mb-4">
          <input
            type="checkbox"
            id="showPassword"
            checked={showPassword}
            onChange={() => setShowPassword(!showPassword)}
            className="mr-2"
          />
          <label htmlFor="showPassword">Show password</label> 
          <a href="#" className="text-blue-500">Forgot Password?</a>

        </div>


        <button type="submit" className="bg-blue-500 text-white py-2 rounded w-full">Sign in</button>
      </form>
    </div>
  );
}

export default PasswordPage;