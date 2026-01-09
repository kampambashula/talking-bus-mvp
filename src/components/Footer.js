import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => (
  <Box sx={{ bgcolor: 'secondary.main', color: '#FFFFFF', py: 2, textAlign: 'center' }}>
    <Typography>&copy; 2026 Talking Bus Initiative</Typography>
    <Link href="/about" color="inherit">About Talking Bus</Link>
  </Box>
);

export default Footer;
