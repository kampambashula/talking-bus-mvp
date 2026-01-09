import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const fares = [
  { route: "Lusaka - Chelstone", fare: 10 },
  { route: "Lusaka - Matero", fare: 12 },
  { route: "Lusaka - Chilenje", fare: 15 },
];

const FareChart = () => (
  <TableContainer component={Paper} sx={{ margin: 3 }}>
    <Typography variant="h6" sx={{ padding: 2 }}>Current Fares</Typography>
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
