import React from 'react';
import AppNavbar from '../navbar/navbar';
import Footer from '../footer/footer';
import { Container } from 'react-bootstrap';

const Layout = ({ children }: any) => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <AppNavbar />
      <Container className="flex-grow-1 mt-4">
        {children}
      </Container>
      <Footer />
    </div>
  );
};

export default Layout;
