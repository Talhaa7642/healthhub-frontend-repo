import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { services } from '../../utils/data';

const Services = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <Row>
      {services.map((services, index) => (
        <Col md={4} key={index} className="mb-4">
          <Card>
            <Card.Body className="text-center">
              <Card.Title>{services.title}</Card.Title>
              <Card.Text>{services.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
      </Row>
    </Container>
  );
};

export default Services;
