import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import Layout from '../../components/layout/layout';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [validated, setValidated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      setShowAlert(true);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setValidated(false);
    }
  };

  return (
    <Layout>
    <Container className="py-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          Message sent successfully!
        </Alert>
      )}
      <Row className="mb-4">
        <Col md={6}>
          <h3>Contact Details</h3>
          <p>Address: Bahria Town Lahore</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: contact@healthhub.com</p>
          <div className="map-responsive">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.9181774605864!2d-122.0842494846819!3d37.42199997982512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba2f5a2504d1%3A0xc7a1f84e11e3e589!2sGoogleplex!5e0!3m2!1sen!2sus!4v1616813016885!5m2!1sen!2sus"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
            //   allowFullScreen=""
              aria-hidden="false"
            //   tabIndex="0"
            ></iframe>
          </div>
        </Col>
        <Col md={6}>
          <h3>Send Us a Message</h3>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide your name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                required
                as="textarea"
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a message.
              </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit">Send Message</Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </Layout>
  );
};

export default ContactPage;
