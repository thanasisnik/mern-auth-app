import React from 'react';

const LoggedIn = ({ username, onLogout }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Welcome, {username}!
        </h1>
        
        <p className="text-gray-600 text-center mb-8">
          Succesful login.
        </p>
        
        <button 
          onClick={onLogout} 
          className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
        >
          Αποσύνδεση
        </button>
      </div>
    </div>
  );
};

export default LoggedIn;