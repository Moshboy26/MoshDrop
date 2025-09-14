import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function OwnerLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (data.success) {
        localStorage.setItem('moshdrop_owner', '1');
        navigate('/owner/dashboard');
      } else {
        setError(data.message || 'Wrong credentials 😬');
      }
    } catch (err) {
      console.error(err);
      setError('Oops! Something went wrong 😢');
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl flex flex-col space-y-6">
        <h2 className="text-2xl font-bold text-teal-500 text-center">Welcome Moshboy! 👋</h2>
        <p className="text-gray-500 text-center">Login to access the dashboard.</p>

        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Owner email"
            className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-teal-400 outline-none"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full border border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-teal-400 outline-none"
          />
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-3 rounded-xl hover:bg-teal-600 transition"
          >
            Unlock Dashboard 🔑
          </button>
        </form>

        <button
          onClick={() => navigate('/')}
          className="w-full border border-teal-500 text-teal-500 py-3 rounded-xl hover:bg-teal-50 transition"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}
