import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';

import PeopleIcon from '@mui/icons-material/People';

import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HouseIcon from '@mui/icons-material/House';
import BadgeIcon from '@mui/icons-material/Badge';


export const mainListItems = (
  <React.Fragment>
    <ListItemButton component="a" href='/admin'>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Main" />
      
    </ListItemButton>
    <ListItemButton component="a" href="/houseTable">
      <ListItemIcon>
        <HouseIcon />
      </ListItemIcon>
      <ListItemText primary="House List" />
     
    </ListItemButton>
    <ListItemButton component="a" href="#simple-list">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItemButton>
    <ListItemButton component="a" href="#simple-list">
      <ListItemIcon>
        <BadgeIcon />
      </ListItemIcon>
      <ListItemText primary="Employees" />
    </ListItemButton>
    <ListItemButton component="a" href="#simple-list">
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Projects" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Management users
    </ListSubheader>
    <ListItemButton component="a" href="#simple-list">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
     
    </ListItemButton >
    <ListItemButton component="a" href="#simple-list">
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Change password" />
    </ListItemButton>
    {/* <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton> */}
  </React.Fragment>
);