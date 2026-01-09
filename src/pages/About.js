import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => (
  <Container sx={{ marginY: 4 }}>
    <Typography variant="h4" gutterBottom>About Talking Bus</Typography>
    <Typography>
      Talking Bus is a pilot initiative to help buses communicate official fare information clearly
      and transparently to passengers, conductors, and operators. This QR-based system ensures fares
      are always accurate without reprinting charts.
    </Typography>
  </Container>
);

export default About;
