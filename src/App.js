import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import Footer from './components/Footer';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Leadership from './pages/Leadership';
import Success from './pages/Success';
import BusinessesDetails from './pages/BusinessesDetails'
import CustomerTestimonials from './pages/CustomerTestimonials';
import CompanyMap from './pages/CompanyMap';
import WhatsappButton from './pages/WhatsappButton'

function App() {
  return (
    <Router>
      {/* Navbar that stays on all pages */}
      <CustomNavbar />
      
      {/* Define the routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/businesses" element={<BusinessesDetails />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/success" element={<Success />} />
        <Route path="/testimonials" element={<CustomerTestimonials />} />
        <Route path="/map" element={<CompanyMap />} />
      </Routes>
<WhatsappButton/>
      {/* Footer that stays on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
