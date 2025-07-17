import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    TextField,
    Button,
    Typography,
    Alert,
} from '@mui/material';

export default function Register({ register }) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const res = await axios.post(
                'http://localhost:8080/register/regisubmit',
                formData
            );

            const user = res.data;

            // ✅ Save to localStorage if needed
            localStorage.setItem('currentUser', JSON.stringify(user));

            // ✅ Call parent handler to set user in state
            register(user);

            // ✅ Redirect to dashboard (or login if you want)
            navigate('/login');
        } catch (err) {
            // Axios puts the server error response in err.response
            const message = err.response?.data?.error || err.message || 'Registration failed';
            setError(message);
        }
    };


    return (
        <Box
            sx={{
                maxWidth: 400,
                mx: 'auto',
                mt: 8,
                p: 4,
                border: '1px solid #ccc',
                borderRadius: 2,
            }}
        >
            <Typography variant="h5" gutterBottom>
                Register
            </Typography>

            {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                    {error}
                </Alert>
            )}

            <form onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />

                <TextField
                    label="Password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    required
                />

                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2 }}
                >
                    Register
                </Button>
            </form>
        </Box>
    );
}
