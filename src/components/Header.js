import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Header = () => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <img src="/images/logo.png" alt="Logo" style={{ height: 50 }} />
        <Typography variant="h6">Official Fare Chart</Typography>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
