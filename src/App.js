import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { AnimatePresence } from 'framer-motion';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Page Components
import Home from './components/pages/Home';
import About from './components/pages/About';
import Solutions from './components/pages/Solutions';
import Products from './components/pages/Products';
import Catalog from './components/pages/Catalog';
import Contact from './components/pages/Contact';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Header />
      <main className="main-content">
        <AnimatePresence mode="wait">
          <Container fluid className="p-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/products" element={<Products />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Container>
        </AnimatePresence>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
