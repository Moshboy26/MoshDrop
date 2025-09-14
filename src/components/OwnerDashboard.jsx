import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function OwnerDashboard() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('moshdrop_owner');
    navigate('/owner');
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-teal-500 mb-4">Owner Dashboard</h2>
        <p className="text-gray-500 text-center mb-6">All messages will arrive directly to your Gmail inbox 📩</p>

        <button
          onClick={logout}
          className="w-full bg-teal-500 text-white py-3 rounded-xl hover:bg-teal-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
