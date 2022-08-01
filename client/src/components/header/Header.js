import React, { useEffect, useState } from 'react';

import {
  AppBar, IconButton, Toolbar,
  Button,
  MenuItem
} from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';

import { useStyles } from './style';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import { Link as Scroll } from 'react-scroll';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
const pages = ['buy', 'rent'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


export default function Header() {

  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <Typography
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
              <h1 className={classes.appbarTitle}>
                <MapsHomeWorkOutlinedIcon className={classes.colorText} fontSize='large' />
                Royal<span className={classes.colorText}>Realty</span>
              </h1>
            </Link>

          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              onClick={handleOpenNavMenu}>
              <SortIcon className={classes.icon} />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>

                  <Typography textAlign="center">
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`/pages/${page}`}>{page}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <h1 className={classes.appbarTitle}>
              <MapsHomeWorkOutlinedIcon className={classes.colorText} fontSize='large' />
              Royal<span className={classes.colorText}>Realty</span>
            </h1>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} className={classes.box}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link style={{ textDecoration: 'none', color: 'white' }} to={`/pages/${page}`}>{page}</Link>
              </Button>
            ))}
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <Scroll to="about" smooth={true} style={{ textDecoration: 'none', color: 'white' }}>
                about
              </Scroll>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <Scroll to="project" smooth={true} style={{ textDecoration: 'none', color: 'white' }}>
                project
              </Scroll>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <Scroll to="contact" smooth={true} style={{ textDecoration: 'none', color: 'white' }}>
                contact
              </Scroll>
            </Button>

          </Box>
          <Button
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            <Link style={{ textDecoration: 'none', color: 'white' }} to={'/signUp'}>SignIn / SignUp</Link>
          </Button>
        </Toolbar>
      </AppBar>


    </div>
  );
}
