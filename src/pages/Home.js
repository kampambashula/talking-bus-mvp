// src/pages/Home.js
import React from 'react';
import { Container } from '@mui/material';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FareChart from '../components/FareChart';
import QRSection from '../components/QRSection';
import Footer from '../components/Footer';
import WhyThisMatters from '../components/WhyThisMatters';

const Home = () => {
  return (
    <>
      <Header />

      <Container sx={{ marginY: 4 }}>
        <Hero />
        <FareChart />
        <QRSection />
        <WhyThisMatters />
      </Container>

      <Footer />
    </>
  );
};

export default Home;
