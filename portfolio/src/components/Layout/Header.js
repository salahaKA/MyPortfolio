import React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import '../../styles/Header.css';
import { Home, Home as HomeIcon } from '@mui/icons-material'

const Header = () => {
  return (
    <AppBar position="static" className="appBar">
      <Toolbar className='toolbar'>
        <IconButton edge="start" color="inherit" aria-label='logo' className='logo'>
          <HomeIcon fontSize='large'></HomeIcon>
        </IconButton>
        
        <Typography variant="h6" className="title">
          My Portfolio
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
