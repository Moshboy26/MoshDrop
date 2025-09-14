import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-4xl mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-lg">Mø</div>
          <span className="font-semibold text-lg text-gray-800">MøshDrop</span>
        </Link>
        <nav className="space-x-4 text-sm">
          <Link to="/owner" className="text-teal-600 font-medium hover:underline">Owner</Link>
        </nav>
      </div>
    </header>
  );
}
