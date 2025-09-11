import React from 'react';
import { List, ListSubheader, ListItemButton, ListItemIcon, ListItemText, Collapse } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import StarBorder from '@mui/icons-material/StarBorder';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function NestedList({ open, onToggle, openSub, onSubToggle, header, showHeader }) {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {showHeader && <ListSubheader>{header}</ListSubheader>}
      <ListItemButton onClick={onToggle}>
        <ListItemIcon><InboxIcon /></ListItemIcon>
        <ListItemText primary={header} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {['Starred 1','Starred 2'].map(text => (
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
              {['Sub Item 1','Sub Item 2'].map(text => (
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
}