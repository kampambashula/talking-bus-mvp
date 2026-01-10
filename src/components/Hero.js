import React from 'react';
import { Box, Typography, Chip } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        border: '1px solid #eee',
        borderRadius: 2,
        padding: { xs: 3, md: 5 },
        marginBottom: 4,
      }}
    >
      {/* Pilot Label */}
      <Chip
        label="Pilot Initiative"
        sx={{
          backgroundColor: '#f57c00', // orange accent
          color: '#fff',
          fontWeight: 600,
          marginBottom: 2,
        }}
      />

      {/* Main Heading */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: 700, color: '#000' }}
      >
        Official Fare Information via QR Code
      </Typography>

      {/* Subheading */}
      <Typography
        variant="body1"
        sx={{ color: '#333', maxWidth: 720 }}
      >
        Talking Bus is a public transport media and communication pilot designed to help bus and taxi
        operators share approved fare information clearly, consistently, and transparently
        using simple QR codes displayed inside vehicles.
      </Typography>

      {/* Trust Cue */}
      <Typography
        variant="body2"
        sx={{ marginTop: 2, color: 'text.secondary' }}
      >
        This system focuses on fare visibility and updates. 
      </Typography>
    </Box>
  );
};

export default Hero;
