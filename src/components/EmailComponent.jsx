import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EmailPage() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {e.preventDefault();navigate('/password', { state: { email } });
  };

  return (
    <div className="h-screen bg-gray-100">
   
      <form onSubmit={handleSubmit} className="bg-white rounded shadow-md">
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
    </div>
  );
}

export default EmailPage;