import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    setError('');

    try {
      const response = await axios.post('http://localhost:8080/login/logsubmit', {
        email,
        password,
      },
        { withCredentials: true });

      // ✅ Save user
      localStorage.setItem('currentUser', JSON.stringify(response.data.user));

      // ✅ Save JWT token too!
      localStorage.setItem('token', response.data.token);

      // ✅ Update parent
      onLogin(response.data.user);

      // ✅ Redirect to dashboard
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      console.error('Login error:', err);
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError('Something went wrong. Please try again.');
      }
    }
  };

  return (  // ✅ CORRECT: This is the component's return, outside handleLogin
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper sx={{ p: 4, width: 300 }}>
        <Box display='flex'>
          <Button variant="text">Login</Button>
          <Button variant="text" onClick={() => navigate('/register')}>
            Register
          </Button>
        </Box>
        <TextField
          fullWidth
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
        />
        {error && (
          <Typography variant="body2" color="error" mt={1}>{error}</Typography>
        )}
        <Button fullWidth variant="contained" sx={{ mt: 2 }} onClick={handleLogin}>
          Login
        </Button>
      </Paper>
    </Box>
  );
}
