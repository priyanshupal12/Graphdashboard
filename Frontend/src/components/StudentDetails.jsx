import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Typography, TextField, Button } from '@mui/material';
import api from '../Api/api';

export default function StudentDetails() {
    const { id } = useParams();
    const [student, setStudent] = useState(null);
    const [score, setScore] = useState('');

    useEffect(() => {
        const fetchStudent = async () => {
            const res = await api.get(`/students/${id}`);
            setStudent(res.data);
        };
        fetchStudent();
    }, [id]);

    const handleUpdate = async () => {
        await api.patch(`/marks/${student.mark_id}`, { score });
        alert('Marks updated!');
    };

    if (!student) return <Typography>Loading...</Typography>;

    return (
        <Box p={4}>
            <Typography variant="h5">{student.name}</Typography>
            <Typography>Current Marks: {student.current_marks}</Typography>
            <TextField
                label="New Marks"
                value={score}
                onChange={(e) => setScore(e.target.value)}
                sx={{ my: 2 }}
            />
            <Button variant="contained" onClick={handleUpdate}>Update</Button>
        </Box>
    );
}
