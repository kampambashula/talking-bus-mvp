import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const fares = [
  { route: "Town - Chelstone", fare: 15 },
  { route: "Town - Manda Hill", fare: 15 },
  { route: "Town - Kabulonga", fare: 17 },
  { route: "Town - Chainda", fare: 18 },
  { route: "Lusaka - Kabwe", fare: 260 },
  { route: "Lusaka - Ndola", fare: 320 },
  { route: "Lusaka - Kitwe", fare: 330 },
  { route: "Lusaka- Chingola", fare: 380},
];

// 👇 Manually updated when fares change
const LAST_UPDATED = "15 January 2026";

const FareChart = () => (
  <TableContainer component={Paper} sx={{ margin: 3 }}>
    <Typography variant="h6" sx={{ padding: 2 }}>Current Bus Fares</Typography>
    <Typography
        variant="caption"
        sx={{ color: 'text.secondary' }}
      >
        Last updated: {LAST_UPDATED}
      </Typography>
    <Table>
      <TableHead sx={{ backgroundColor: '#FF6B00' }}>
        <TableRow>
          <TableCell sx={{ color: '#FFFFFF' }}>Route</TableCell>
          <TableCell sx={{ color: '#FFFFFF' }}>Fare (ZMW)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {fares.map(row => (
          <TableRow key={row.route}>
            <TableCell>{row.route}</TableCell>
            <TableCell>{row.fare}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default FareChart;
