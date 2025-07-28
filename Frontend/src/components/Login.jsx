import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';

export default function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // const navigate = useNavigate();

  const handleLogin = async () => {
    setError('');

    try {
      const response = await axios.post(
        'http://localhost:8080/login/logsubmit',
        { email, password },
        { withCredentials: true } // ✅ to send cookies (refresh token)
      );

      console.log(response.data)
      // ✅ Save user details
      localStorage.setItem('currentUser', JSON.stringify(response.data.user));

      // ✅ Save access token (JWT)
      localStorage.setItem('token', response.data.accessToken);

      // ✅ Call parent to update auth state
      onLogin(response.data.user);

      // ✅ Go to dashboard
      // navigate('/dashboard');

    } catch (err) {
      console.error('Login error:', err);
      if (err.response?.data?.error) {
        setError(err.response.data.error);
      } else {
        setError('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Paper sx={{ p: 4, width: 300 }}>
        <Typography variant="h5" mb={2} textAlign="center">
          Teacher / Principal Login
        </Typography>

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
          <Typography variant="body2" color="error" mt={1}>
            {error}
          </Typography>
        )}

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2 }}
          onClick={handleLogin}
        >
          Login
        </Button>
      </Paper>
    </Box>
  );
}
