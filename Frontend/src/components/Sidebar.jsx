import React from 'react';
import { Drawer, Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const drawerWidth = 250;

export default function Sidebar({ open }) {
  const items = ['Dashboard', 'Reports', 'Settings'];
  return (
    <Drawer variant="persistent" anchor="left" open={open} sx={{ width: drawerWidth, flexShrink: 0, [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', mt: 8 } }}>
      <Box>
        <List>
          {items.map(text => (
            <ListItem key={text}>
              <ListItemButton component={Link} to={`/${text.toLowerCase()}`}>  {/* add to prop */}
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}