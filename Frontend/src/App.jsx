import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Register from './components/Register';
import Login from './components/Login';
import MyLayout from './components/MyLayout';
import ProtectedTest from './components/ProtectedTest';

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // Check localStorage on mount
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (user) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Navigate to="/login" />
          }
        />
        <Route
          path="/register"
          element={
            <Register register={handleLogin} />
          }
        />
        <Route
          path="/login"
          element={
            currentUser ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />
          }
        />
        <Route
          path="/dashboard"
          element={
            currentUser ? (
              <MyLayout user={currentUser} onLogout={handleLogout} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/profile"
          element={
            currentUser ? <ProtectedTest to="/protected" /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </Router>
  );
}
