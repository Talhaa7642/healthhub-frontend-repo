import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import ServicesPage from './pages/services/services';
import AboutPage from './pages/about/about';
import ContactUsPage from './pages/contactUs/contactUs';
import BookAppointment from './pages/bookAppointment/bookAppointment';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="/book-appointment" element={<BookAppointment />} />

    </Routes>
  </Router>
  );
};

export default App;