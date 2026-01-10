import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => (
  <Box sx={{ bgcolor: 'secondary.main', color: '#FFFFFF', py: 2, textAlign: 'center' }}>
    <Typography>&copy; 2026 Talking Bus Initiative</Typography>
    <Typography>This fare chart is provided as part of a Talking Bus pilot in collaboration with transport stakeholders.</Typography>
    <Link href="/about" color="inherit">About Talking Bus</Link>
  </Box>
);

export default Footer;
