import React, { useState, useEffect } from 'react';
import { MenuItem, Select, FormControl, InputLabel, Box, Typography } from '@mui/material';
import api from '../Api/api'; // your axios setup

const ClassSectionSelector = () => {
  const [selectedClass, setSelectedClass] = useState('10');
  const [selectedSection, setSelectedSection] = useState('A');
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const className = `${selectedClass}${selectedSection}`;
      try {
        const res = await api.get(`/classes/${className}/students`);
        // setStudents(res.data); // update with your actual response structure
        console.log(`[DEBUG] Loaded data for ${className}`, res.data);
      } catch (err) {
        console.error('[DEBUG] API error:', err.response?.data || err.message);
        setStudents([]);
      }
    };

    fetchStudents();
  }, [selectedClass, selectedSection]);

  return (
    <Box>
      <Box display="flex" gap={2} alignItems="center" mb={2}>
        <FormControl>
          <InputLabel>Class</InputLabel>
          <Select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)} label="Class" sx={{ width: 50, height: 40, mt: 2 }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((cls) => (
              <MenuItem key={cls} value={cls}>{cls}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel>Section</InputLabel>
          <Select value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)} label="Section" sx={{ width: 50, height: 40, mt: 2 }}>
            {['A', 'B'].map((sec) => (
              <MenuItem key={sec} value={sec}>{sec}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student.name}</li> // Adjust `student.name` as per your data
        ))}
      </ul>
    </Box>
  );
};

export default ClassSectionSelector;
