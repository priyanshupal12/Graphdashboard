import { useState, useEffect } from 'react';
import api from '../Api/api';
import { Link } from 'react-router-dom'
import AccountMenu from './AccountMenu';
// import ClassSectionSelector from './ClassSectionSelector';

import {
  Box, Container, Grid, Card, CardHeader, CardContent, Typography,
  AppBar, Toolbar, IconButton, TextField, InputAdornment, Drawer,
  List, ListItem, ListItemButton, ListSubheader, ListItemIcon,
  Collapse, ListItemText, LinearProgress, Paper,
  FormControl, Select, MenuItem
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import StarBorder from '@mui/icons-material/StarBorder';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


import { green } from '@mui/material/colors';
import { DataGrid } from '@mui/x-data-grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { ResponsiveLine } from '@nivo/line';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsivePie } from '@nivo/pie';

const drawerWidth = 250;

export default function NotMyLayout({ user, onLogout }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [list1Open, setList1Open] = useState(true);
  const [list1SubOpen, setList1SubOpen] = useState(false);
  const [list2Open, setList2Open] = useState(false);
  const [list2SubOpen, setList2SubOpen] = useState(false);
  // const [protectedData, setProtectedData] = useState('');
  const [error, setError] = useState('');
  const [mode, setMode] = useState('light');
  const [selectedClass, setSelectedClass] = useState('10');
  const [selectedSection, setSelectedSection] = useState('A');
  const [students, setStudents] = useState([]);

  const theme = createTheme({ palette: { mode } });

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const toggleList1 = () => setList1Open(!list1Open);
  const toggleList1Sub = () => setList1SubOpen(!list1SubOpen);
  const toggleList2 = () => setList2Open(!list2Open);
  const toggleList2Sub = () => setList2SubOpen(!list2SubOpen);

  useEffect(() => {
    const fetchProtectedData = async () => {
      const className = `${selectedClass}${selectedSection}`;
      // console.log(className)
      // const token = localStorage.getItem('token');
      // console.log('[DEBUG] Sending protected request with token...');

      try {
        const res = await api.get(`/classes/${className}/students`);
        const studentsData = Array.isArray(res.data) ? res.data : [];
        setStudents(studentsData);
        console.log("before access expired", studentsData)
      } catch (err) {
        console.log('[DEBUG] Protected request failed:', err.response?.status, err.response?.data || err.message);

        if ([401, 403].includes(err.response?.status)) {
          console.log('[DEBUG] Access token expired. Trying refresh...');
          try {
            const refreshRes = await api.get('/tokens/refresh');
            const newAccessToken = refreshRes.data.accessToken;
            localStorage.setItem('token', newAccessToken);

            const retry = await api.get(`/classes/${className}/students`);
            const retrystudentsData = Array.isArray(retry.data.message) ? retry.data.message : [];
            console.log("After access expired", retry.data)
            setStudents(retrystudentsData);
          } catch (refreshErr) {
            console.log('[DEBUG] Refresh failed:', refreshErr.response?.data || refreshErr.message);
            setError('Refresh failed: ' + (refreshErr.response?.data?.error || refreshErr.message));
          }
        } else {
          setError(err.response?.data?.error || err.message);
        }
      }
    };

    fetchProtectedData();
  }, [selectedClass, selectedSection]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'roll_number', headerName: 'Roll No', width: 130 },
    { field: 'class', headerName: 'Class', type: 'String', width: 90 },
    // { field: 'class', headerName: 'Class', width: 90 },
  ];

  const paginationModel = { page: 0, pageSize: 5 };

  const DrawerList = (
    <Box>
      <List>
        {['Dashboard', 'Reports', 'Settings'].map(text => (
          <ListItem key={text}>
            <ListItemButton component={Link} >
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const DataTable = () => (
    <Paper sx={{ flex: 1, display: 'flex', flexDirection: 'column', height: 400, width: '100%' }}>
      <DataGrid
        rows={students}
        columns={columns}
        initialState={{ pagination: { paginationModel }}}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0, flex: 1 }}
      />
    </Paper>
  );

  const NestedList = ({ open, onToggle, openSub, onSubToggle, header = "Inbox", showHeader = true }) => (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {showHeader && (
        <ListSubheader>Nested List Items</ListSubheader>
      )}
      <ListItemButton onClick={onToggle}>
        <ListItemIcon><InboxIcon /></ListItemIcon>
        <ListItemText primary={header} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {['Starred 1', 'Starred 2'].map(text => (
            <ListItemButton key={text} sx={{ pl: 4 }}>
              <ListItemIcon><StarBorder /></ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          ))}
          <ListItemButton onClick={onSubToggle} sx={{ pl: 4 }}>
            <ListItemIcon><StarBorder /></ListItemIcon>
            <ListItemText primary="Starred 3 (Expandable)" />
            {openSub ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openSub} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {['Sub Item 1', 'Sub Item 2'].map(text => (
                <ListItemButton key={text} sx={{ pl: 8 }}>
                  <ListItemIcon><StarBorder /></ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </List>
      </Collapse>
    </List>
  );

  const areaGraphData = [{
    id: "area_trend", data: [
      { x: "Mon", y: 40 }, { x: "Tue", y: 42 }, { x: "Wed", y: 41 },
      { x: "Thu", y: 43 }, { x: "Fri", y: 42 },
    ]
  }];

  const stackedBarData = [
    { day: "Mon", apples: 30, bananas: 20 },
    { day: "Tue", apples: 40, bananas: 25 },
    { day: "Wed", apples: 35, bananas: 30 },
    { day: "Thu", apples: 50, bananas: 20 },
    { day: "Fri", apples: 40, bananas: 35 },
  ];

  const pieData = [
    { id: 'India', label: 'India', value: 500 },
    { id: 'US', label: 'US', value: 300 },
    { id: 'EU', label: 'EU', value: 200 },
    { id: 'Others', label: 'Others', value: 100 },
  ];

  const totalUsers = pieData.reduce((acc, cur) => acc + cur.value, 0);

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'background.paper',
          color: 'text.primary',
          boxShadow: 1,
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ px: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Left: Logo & Menu toggle */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" fontWeight="bold">
              My Dashboard
            </Typography>
          </Box>

          {/* Middle: Search */}
          <Box sx={{ flex: 1, mx: 4, maxWidth: 500 }}>
            <Box display='flex' alignItems="center">
              <TextField
                fullWidth
                size="small"
                variant="outlined"
                placeholder="Search..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
              {/* //dropdown start */}
              <Box>
                <Box display="flex" gap={2} alignItems="center" mb={2}>
                  <FormControl>
                    {/* <InputLabel>Class</InputLabel> */}
                    <Select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)} label="Class" sx={{ width: 50, height: 40, mt: 2 }}>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((cls) => (
                        <MenuItem key={cls} value={cls}>{cls}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl>
                    {/* <InputLabel>Section</InputLabel> */}
                    <Select value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)} label="Section" sx={{ width: 50, height: 40, mt: 2 }}>
                      {['A', 'B'].map((sec) => (
                        <MenuItem key={sec} value={sec}>{sec}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </Box>
              {/* //dropdown end */}
            </Box>
          </Box>

          <Box display='flex'>
            <IconButton color="inherit" onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
              {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
            
            <AccountMenu onLogout={onLogout} />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        anchor="left"
        open={drawerOpen}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
            mt: 8,
          },
        }}
      >
        {DrawerList}
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          marginLeft: drawerOpen ? `${drawerWidth}px` : 0,
          transition: 'margin 0.3s',
        }}
      >
        <Container maxWidth="xl">
          <Grid
            container
            spacing={2}
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(4, 1fr)',
              },
              gap: 2,
            }}
          >
            {[...Array(4)].map((_, index) => (
              <Card key={index}>
                <CardHeader title="Landing Page" />
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    px: 2,
                  }}
                >
                  <Typography variant="h6">14K</Typography>
                  <Typography
                    sx={{
                      bgcolor: green[700],
                      color: green[100],
                      border: 1,
                      borderRadius: 10,
                      px: 1.5,
                      py: 0.5,
                      display: 'inline-block',
                      lineHeight: 1,
                    }}
                  >
                    +25%
                  </Typography>
                </Box>
                <Typography px={2}>Last 30 Days</Typography>
                <CardContent sx={{ height: 100 }}>
                  <ResponsiveLine
                    data={areaGraphData}
                    margin={{ top: 10, right: 10, bottom: 20, left: 30 }}
                    xScale={{ type: 'point' }}
                    yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                      orient: 'bottom',
                      tickSize: 5,
                      tickPadding: 5,
                      tickRotation: 0,
                    }}
                    axisLeft={null}
                    enableGridX={false}
                    enableGridY={false}
                    colors={{ scheme: 'nivo' }}
                    pointSize={6}
                    pointColor={{ theme: 'background' }}
                    pointBorderWidth={2}
                    pointBorderColor={{ from: 'serieColor' }}
                    pointLabelYOffset={-12}
                    useMesh={true}
                    isInteractive={true}
                    enableArea={true}
                  />
                </CardContent>
              </Card>
            ))}
          </Grid>
          <Grid container spacing={2} sx={{
            mt: 2,
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr',
              md: 'repeat(2, 1fr)',
            },
            gap: 2,
          }}>
            {[...Array(2)].map((_, index) => (
              <Card key={index}>
                <CardHeader title="Landing Page" />
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    px: 2,
                  }}
                >
                  <Typography variant="h6">14K</Typography>
                  <Typography
                    sx={{
                      bgcolor: green[700],
                      color: green[100],
                      border: 1,
                      borderRadius: 10,
                      mx: 1,
                      px: 1.5,
                      py: 0.5,
                      display: 'inline-block',
                      lineHeight: 1,
                    }}
                  >
                    +25%
                  </Typography>
                </Box>
                <Typography px={2}>Last 30 Days</Typography>
                <CardContent sx={{ height: 120 }}>
                  {index === 0 ? (
                    <ResponsiveLine
                      data={areaGraphData}
                      margin={{ top: 10, right: 10, bottom: 20, left: 30 }}
                      xScale={{ type: 'point' }}
                      yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
                      axisTop={null}
                      axisRight={null}
                      axisBottom={{
                        orient: 'bottom',
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                      }}
                      axisLeft={null}
                      enableGridX={false}
                      enableGridY={false}
                      colors={{ scheme: 'nivo' }}
                      pointSize={0}
                      enablePoints={false}
                      useMesh={true}
                      isInteractive={true}
                      enableArea={true}
                      areaBaselineValue={30}
                      areaOpacity={0.3}
                    />
                  ) : (
                    <ResponsiveBar
                      data={stackedBarData}
                      keys={['apples', 'bananas']}
                      indexBy="day"
                      margin={{ top: 10, right: 10, bottom: 30, left: 30 }}
                      padding={0.3}
                      valueScale={{ type: 'linear' }}
                      indexScale={{ type: 'band', round: true }}
                      colors={{ scheme: 'nivo' }}
                      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                      axisTop={null}
                      axisRight={null}
                      axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                      }}
                      axisLeft={null}
                      labelSkipWidth={12}
                      labelSkipHeight={12}
                      labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                      legends={[]}
                      role="application"
                      isInteractive={true}
                    />
                  )}
                </CardContent>
              </Card>
            ))}
          </Grid>
          <Typography marginTop={2} fontWeight={5}>Details</Typography>
          <Box display='flex' gap={2} marginTop={2} sx={{ flexDirection: { xs: 'column', lg: 'row' } }}>
            <Box flex={3} width="100%" maxWidth={drawerOpen ? 850 : '100%'}>
              <DataTable />
            </Box>
            <Box sx={{ flex: 1, display: 'flex', flexDirection: { xs: 'row', lg: 'column' }, gap: 2 }}>
              <Box border={1} sx={{ borderColor: 'primary.main', borderRadius: 2, bgcolor: 'background.paper' }}>
                <NestedList
                  open={list1Open}
                  onToggle={toggleList1}
                  openSub={list1SubOpen}
                  onSubToggle={toggleList1Sub}
                  showHeader={true} // ✅ This one shows the subheader
                />

                <NestedList
                  open={list2Open}
                  onToggle={toggleList2}
                  openSub={list2SubOpen}
                  onSubToggle={toggleList2Sub}
                  showHeader={false} // ✅ This one does NOT show it
                />
              </Box>
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  bgcolor: 'background.paper',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h6" mb={2}>Users by Country</Typography>

                <Box sx={{ height: 200, width: '100%', position: 'relative' }}>
                  <ResponsivePie
                    data={pieData}
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                    innerRadius={0.6} // ✅ donut shape
                    padAngle={0.7}
                    cornerRadius={3}
                    activeOuterRadiusOffset={8}
                    colors={{ scheme: 'paired' }}
                    borderWidth={1}
                    borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                    enableArcLabels={false}
                    enableArcLinkLabels={false}
                  />

                  {/* Center label */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      textAlign: 'center',
                    }}
                  >
                    <Typography variant="subtitle2">Total</Typography>
                    <Typography variant="h6">{totalUsers}</Typography>
                  </Box>
                </Box>

                <Box sx={{ width: '100%', mt: 2 }}>
                  {pieData.map((item) => {
                    const percent = ((item.value / totalUsers) * 100).toFixed(0);
                    return (
                      <Box key={item.id} sx={{ mb: 1 }}>
                        <Typography variant="body2">{item.label}: {percent}%</Typography>
                        <LinearProgress variant="determinate" value={percent} />
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}




