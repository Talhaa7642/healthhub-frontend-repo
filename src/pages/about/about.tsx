import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { teamMembers } from '../../utils/data';
import Layout from '../../components/layout/layout';

const AboutPage = () => {


  return (
    <Layout>
    <Container className="py-5">
      <h1 className="text-center mb-4">About Us</h1>
      <p className="text-center mb-4">
        Welcome to HealthHub. Our mission is to provide excellent healthcare services to all our clients. We are committed to making healthcare accessible and affordable.
      </p>
      <h2 className="text-center mb-4">Our Team</h2>
      <Row>
        {teamMembers.map((member, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100">
            <Card.Img variant="top" src={member.image} alt={member.name} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{member.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
                <Card.Text className="flex-grow-1">{member.bio}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </Layout>
  );
};

export default AboutPage;
