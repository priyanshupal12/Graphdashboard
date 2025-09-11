// File: src/layouts/MyLayout.js
import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography, LinearProgress, Paper } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import api from '../Api/api';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import DataTable from '../components/DataTable';
import NestedList from '../components/NestedList';
import StatsCard from '../components/StatsCard';
import { BarChart, PieChart } from '../components/Charts';

const drawerWidth = 250;

export default function MyLayout({ user, onLogout }) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [mode, setMode] = useState('light');
    const [selectedClass, setSelectedClass] = useState(10);
    const [selectedSection, setSelectedSection] = useState('A');
    const [students, setStudents] = useState([]);
    const [error, setError] = useState('');
    const [list1Open, setList1Open] = useState(true);
    const [list1SubOpen, setList1SubOpen] = useState(false);
    const [list2Open, setList2Open] = useState(false);
    const [list2SubOpen, setList2SubOpen] = useState(false);

    const theme = createTheme({ palette: { mode } });

    useEffect(() => {
        async function fetchStudents() {
            try {
                const className = `${selectedClass}${selectedSection}`;
                const res = await api.get(`/classes/${className}/students`);
                setStudents(Array.isArray(res.data) ? res.data : []);
            } catch (err) {
                if ([401, 403].includes(err.response?.status)) {
                    try {
                        const refreshRes = await api.get('/tokens/refresh');
                        localStorage.setItem('token', refreshRes.data.accessToken);
                        const retry = await api.get(`/classes/${selectedClass}${selectedSection}/students`);
                        setStudents(Array.isArray(retry.data) ? retry.data : []);
                    } catch (refreshErr) {
                        setError(refreshErr.response?.data?.error || refreshErr.message);
                    }
                } else {
                    setError(err.response?.data?.error || err.message);
                }
            }
        }
        fetchStudents();
    }, [selectedClass, selectedSection]);

    const areaTrend = [{ id: 'area_trend', data: [{ x: 'Mon', y: 40 }, { x: 'Tue', y: 42 }, { x: 'Wed', y: 41 }, { x: 'Thu', y: 43 }, { x: 'Fri', y: 42 }] }];
    const barData = [{ day: 'Mon', apples: 30, bananas: 20 }, { day: 'Tue', apples: 40, bananas: 25 }, { day: 'Wed', apples: 35, bananas: 30 }, { day: 'Thu', apples: 50, bananas: 20 }, { day: 'Fri', apples: 40, bananas: 35 }];
    const pieData = [{ id: 'India', label: 'India', value: 500 }, { id: 'US', label: 'US', value: 300 }, { id: 'EU', label: 'EU', value: 200 }, { id: 'Others', label: 'Others', value: 100 }];
    const totalUsers = pieData.reduce((a, c) => a + c.value, 0);

    return (
        <ThemeProvider theme={theme}>
            <Header
                drawerOpen={drawerOpen}
                toggleDrawer={() => setDrawerOpen((o) => !o)}
                mode={mode}
                setMode={setMode}
                selectedClass={selectedClass}
                selectedSection={selectedSection}
                setSelectedClass={setSelectedClass}
                setSelectedSection={setSelectedSection}
                onLogout = {onLogout}
            />

            <Sidebar open={drawerOpen} />

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    pt: 3,
                    mt: 8,
                    ml: drawerOpen ? `${drawerWidth}px` : 0,
                    width: drawerOpen ? `calc(100% - ${drawerWidth}px)` : '100%',
                    transition: 'margin 0.3s, width 0.3s',
                }}
            >
                <Container maxWidth="xl">
                    <Grid
                        container
                        spacing={2}
                        sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2,1fr)', lg: 'repeat(4,1fr)' }, gap: 2 }}
                    >
                        {[1, 2, 3, 4].map((i) => (
                            <StatsCard key={i} title="Landing Page" value="14K" delta="+25%" trendData={areaTrend} />
                        ))}
                    </Grid>

                    <Grid container spacing={2} sx={{ mt: 2, display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2,1fr)' }, gap: 2 }}>
                        <StatsCard title="Landing Page" value="14K" delta="+25%" trendData={areaTrend} />
                        <Paper>
                            <BarChart data={barData} />
                        </Paper>
                    </Grid>

                    <Typography mt={2} fontWeight={5}>
                        Details
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 2, mt: 2 }}>
                        <Box flex={3} width="100%" maxWidth={drawerOpen ? 850 : '100%'}>
                            <DataTable students={students} />
                        </Box>

                        <Box sx={{ flex: 1, display: 'flex', flexDirection: { xs: 'row', lg: 'column' }, gap: 2 }}>
                            <Box sx={{ border: 1, borderColor: 'primary.main', borderRadius: 2, bgcolor: 'background.paper' }}>
                                <NestedList
                                    open={list1Open}
                                    onToggle={() => setList1Open((o) => !o)}
                                    openSub={list1SubOpen}
                                    onSubToggle={() => setList1SubOpen((o) => !o)}
                                    header="Inbox"
                                    showHeader
                                />
                                <NestedList
                                    open={list2Open}
                                    onToggle={() => setList2Open((o) => !o)}
                                    openSub={list2SubOpen}
                                    onSubToggle={() => setList2SubOpen((o) => !o)}
                                    header="Inbox"
                                    showHeader={false}
                                />
                            </Box>

                            <Box sx={{ p: 2, borderRadius: 2, bgcolor: 'background.paper', alignItems: 'center' }}>
                                <Typography variant="h6" mb={2}>
                                    Users by Country
                                </Typography>
                                <PieChart data={pieData} total={totalUsers}>
                                    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center' }}>
                                        <Typography variant="subtitle2">Total</Typography>
                                        <Typography variant="h6">{totalUsers}</Typography>
                                    </Box>
                                </PieChart>
                                {pieData.map((item) => {
                                    const pct = ((item.value / totalUsers) * 100).toFixed(0);
                                    return (
                                        <Box key={item.id} sx={{ mb: 1 }}>
                                            <Typography variant="body2">
                                                {item.label}: {pct}%
                                            </Typography>
                                            <LinearProgress variant="determinate" value={Number(pct)} />
                                        </Box>
                                    );
                                })}
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    );
}
