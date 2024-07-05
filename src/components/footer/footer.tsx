import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center text-md-left mb-2 mb-md-0">
            <p className="mb-0">Contact us: (123) 456-7890</p>
            <p className="mb-0">Email: contact@healthhub.com</p>
          </Col>
          <Col xs={12} md={6} className="text-center text-md-right">
            <a href="#" className="text-light mx-2">Facebook</a>
            <a href="#" className="text-light mx-2">Twitter</a>
            <a href="#" className="text-light mx-2">Instagram</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
