import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Testimonials = () => {
  return (
    <Container className="py-5 bg-light">
      <h2 className="text-center mb-4">What Our Clients Say</h2>
      <Row>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Text>"HealthHub provided excellent service and care!"</Card.Text>
              <Card.Subtitle className="mt-2 text-muted">Jane Doe</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Text>"Highly recommend HealthHub for their professional staff."</Card.Text>
              <Card.Subtitle className="mt-2 text-muted">John Smith</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Testimonials;
