import React from 'react';
import Header from './components/Header';
import FareChart from './components/FareChart';
import QRSection from './components/QRSection';
import Footer from './components/Footer';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<><FareChart /><QRSection /></>} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
