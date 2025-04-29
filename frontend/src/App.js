import React, { useState, useEffect } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import LoggedIn from './components/LoggedIn';

function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Έλεγχος αν υπάρχει token στο localStorage κατά τη φόρτωση
    const token = localStorage.getItem('token');
    const savedUsername = localStorage.getItem('username');
    if (token && savedUsername) {
      setIsLoggedIn(true);
      setUsername(savedUsername);
    }
  }, []);

  const switchToRegister = () => setIsLogin(false);
  const switchToLogin = () => setIsLogin(true);
  
  const handleSuccessfulLogin = (token, username) => {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    setUsername(username);
    setIsLoggedIn(true);
  };
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setUsername('');
  };

  if (isLoggedIn) {
    return <LoggedIn username={username} onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {isLogin ? (
          <LoginForm onSwitchToRegister={switchToRegister} onLoginSuccess={handleSuccessfulLogin} />
        ) : (
          <RegisterForm onSwitchToLogin={switchToLogin} />
        )}
      </div>
    </div>
  );
}

export default App;