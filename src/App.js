import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header.jsx';
import WhatsApp from './components/WhatsApp/WhatsApp.jsx';
import Home from './components/Home/Home.jsx';
import Contact from './components/Contact/Contact.jsx';
import About from './components/About/About.jsx';
import Footer from './components/Footer/Footer.jsx';


export default function App() {
  return (
      <Router>
      <Header />
      <WhatsApp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>

  )
}