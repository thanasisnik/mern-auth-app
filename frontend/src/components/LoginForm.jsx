import React, { useState } from 'react';

const LoginForm = ({ onSwitchToRegister, onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      if (result.status) {
        
        localStorage.setItem('token', result.data);
        onLoginSuccess(result.data, formData.username);
      } else {
        setError('Wrong username or password');
      }
    } catch (error) {
      setError('Connection error. Try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-bold text-center text-800 mb-6">Login</h2>
        
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
          <input 
            type="text" 
            id="username"
            name="username" 
            placeholder="Enter your username" 
            onChange={handleChange} 
            required 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input 
            type="password" 
            id="password"
            name="password" 
            placeholder="Enter your password" 
            onChange={handleChange} 
            required 
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Login
        </button>
        {error && <div className="text-red-500 text-center text-sm">{error}</div>}
        <p className="text-center text-gray-600 mt-4">
          Don't have an account? 
          <span 
            onClick={onSwitchToRegister} 
            className="text-blue-600 ml-1 hover:underline cursor-pointer"
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;