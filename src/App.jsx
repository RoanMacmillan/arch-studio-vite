import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/home/index';
import About from './pages/about/index';
import Contact from './pages/contact/index';
import Portfolio from './pages/portfolio/index';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {

  return (
    <div className='app'>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  )
}

export default App;
