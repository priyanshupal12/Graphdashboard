import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Login from './components/Login';
import MyLayout from './components/MyLayout';
import StudentDetails from './components/StudentDetails';

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (user) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    console.log("i am in the logout")
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    setCurrentUser(null);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={currentUser ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />}
        />
        <Route
          path="/dashboard"
          element={currentUser ? <MyLayout user={currentUser} onLogout={handleLogout} /> : <Navigate to="/login" />}
        />
        <Route
          path="/student/:id"
          element={currentUser ? <StudentDetails /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}
