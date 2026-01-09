import React from 'react';
import { Box, Typography } from '@mui/material';

const QRSection = () => (
  <Box sx={{ textAlign: 'center', marginY: 4 }}>
    <Typography variant="h6" gutterBottom sx={{ color: 'primary.main' }}>
      Scan QR for Fare Confirmation
    </Typography>
    <img src="/images/qr_code.png" alt="QR Code" style={{ width: 200, height: 200 }} />
  </Box>
);

export default QRSection;
