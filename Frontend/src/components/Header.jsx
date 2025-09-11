import React from 'react';
import { AppBar, Toolbar, IconButton, Box, Typography, TextField, InputAdornment, FormControl, Select, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import AccountMenu from './AccountMenu';

export default function Header({ drawerOpen, toggleDrawer, mode, setMode, selectedClass, selectedSection, setSelectedClass, setSelectedSection , onLogout}) {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'background.paper', color: 'text.primary', boxShadow: 1, zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar sx={{ px: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" fontWeight="bold">My Dashboard</Typography>
        </Box>

        <Box sx={{ flex: 1, mx: 4, maxWidth: 500 }}>
          <Box display="flex" alignItems="center">
            <TextField
              fullWidth size="small" variant="outlined" placeholder="Search..."
              InputProps={{ startAdornment: (<InputAdornment position="start"><SearchIcon /></InputAdornment>) }}
            />
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', ml: 2 }}>
              <FormControl sx={{ width: 75 }}>
                <Select value={selectedClass} onChange={(e) => setSelectedClass(e.target.value)} sx={{ height: 40 }}>
                  {[...Array(10)].map((_, i) => <MenuItem key={i+1} value={i+1}>{i+1}</MenuItem>)}
                </Select>
              </FormControl>
              <FormControl sx={{ width: 60 }}>
                <Select value={selectedSection} onChange={(e) => setSelectedSection(e.target.value)} sx={{ height: 40 }}>
                  {['A', 'B'].map(sec => <MenuItem key={sec} value={sec}>{sec}</MenuItem>)}
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>

        <Box display="flex">
          <IconButton color="inherit" onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
            {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
          <AccountMenu onLogout={onLogout}/>
        </Box>
      </Toolbar>
    </AppBar>
  );
}