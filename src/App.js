import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CouponsList from './components/CouponsList';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Home from './pages/Home';
import Deals from './pages/Deals';
import Contact from './pages/Contact';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deals" element={<Deals />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* Optionally show landing sections only on home page */}
      {/* <Hero/>
      <Features/>
      <CouponsList/>
      <Testimonials/> */}
      <Footer />
    </Router>
  );
}

export default App;
