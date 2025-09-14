import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import MessagePage from './components/MessagePage';
import OwnerLogin from './components/OwnerLogin';
import OwnerDashboard from './components/OwnerDashboard';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex flex-1 items-center justify-center px-4">
        <Routes>
          <Route path="/" element={
            <div className="max-w-md w-full text-center">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                Welcome to <span className="text-teal-500">MøshDrop</span> 🎉
              </h1>
              <p className="text-gray-600 mb-6">
                Hey, I’m <span className="font-semibold">Moshboy</span>! Drop a secret message anonymously and have some fun 😎
              </p>
              <Link 
                to="/send" 
                className="inline-block bg-teal-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-teal-600 transition transform hover:-translate-y-1"
              >
                Send Anonymous Message
              </Link>
            </div>
          } />
          <Route path="/send" element={<MessagePage />} />
          <Route path="/owner" element={<OwnerLogin />} />
          <Route path="/owner/dashboard" element={<OwnerDashboard />} />
        </Routes>
      </main>
    </div>
  );
}


