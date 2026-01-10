import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => (
  <Container sx={{ marginY: 6 }}>
    <Typography variant="h4" gutterBottom>
      About Talking Bus
    </Typography>

    <Box sx={{ marginBottom: 3 }}>
      <Typography paragraph>
        Talking Bus is a pilot public information initiative designed to help bus and taxi operators
        communicate official fare information clearly, consistently, and transparently to passengers.
        The project responds to a common operational challenge: fare changes often require printing
        new charts, leading to delays, inconsistencies, and disputes.
      </Typography>

      <Typography paragraph>
        By using simple QR codes displayed inside buses, Talking Bus allows passengers, conductors,
        and operators to instantly access the most current fare chart using any smartphone. This
        removes confusion and provides a single, reliable reference point for fares.
      </Typography>
    </Box>

    <Box sx={{ marginBottom: 3 }}>
      <Typography variant="h6" gutterBottom>
        Purpose of the Pilot
      </Typography>

      <Typography paragraph>
        This pilot is focused on improving communication and trust within public transport. It is
        not a payment system and does not process money. Its sole purpose is to make official fare
        information easier to update, verify, and reference in daily operations.
      </Typography>

      <Typography paragraph>
        The pilot is being developed in collaboration with bus operators and transport associations
        to ensure it aligns with existing practices and governance structures.
      </Typography>
    </Box>

    <Box sx={{ marginBottom: 3 }}>
      <Typography variant="h6" gutterBottom>
        How It Works
      </Typography>

      <Typography paragraph>
        Each participating bus displays a QR code linked to an official fare chart page. When fares
        are updated, the information on the page is updated once, and all QR codes immediately point
        to the latest version—without the need to reprint or redistribute paper charts.
      </Typography>

      <Typography paragraph>
        A “Last Updated” timestamp is shown on the fare chart to provide clarity on when fares were
        last changed, helping reduce disputes and misunderstandings.
      </Typography>
    </Box>

    <Box sx={{ marginBottom: 3 }}>
      <Typography variant="h6" gutterBottom>
        Looking Ahead
      </Typography>

      <Typography paragraph>
        While Talking Bus currently focuses on fare information, the platform is designed to be
        expandable. Future phases may explore additional communication tools for operators, such as
        service notices or route updates, subject to stakeholder approval.
      </Typography>
    </Box>

    <Typography variant="body2" color="text.secondary">
      Talking Bus is a pilot initiative developed to support public transport communication and
      transparency. It operates in alignment with existing transport regulations and associations.
    </Typography>
  </Container>
);

export default About;
