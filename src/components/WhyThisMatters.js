import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const WhyThisMatters = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#fafafa',
        borderRadius: 2,
        padding: { xs: 3, md: 4 },
        marginBottom: 4,
        border: '1px solid #eee',
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{ fontWeight: 700, color: '#000' }}
      >
        Why This Matters
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            No Reprinting of Fare Charts
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Fare changes often require printing and distributing new paper charts.
            With QR-based fare information, updates are made once and reflected instantly
            across all participating buses.
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            One Official Source of Truth
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A single, official fare chart reduces confusion, disputes, and inconsistent
            fare interpretation between passengers, conductors, and operators.
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            Clear Accountability
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Displaying a “Last Updated” timestamp helps everyone understand when fares
            were last revised, improving trust and transparency in daily operations.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyThisMatters;
