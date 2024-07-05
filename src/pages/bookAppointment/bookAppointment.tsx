import React, { useState } from "react";
import { Form, Button, Container, Alert, Row, Col } from "react-bootstrap";
import { useCreateAppointmentMutation } from "../../redux/reducers/appointmentSlice";

const BookAppointment = () => {
  const [createAppointment, { isLoading, isSuccess, isError, error }] =
    useCreateAppointmentMutation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    } else {
      try {
        await createAppointment(formData).unwrap();
        setShowAlert(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: "",
          time: "",
        });
        setValidated(false);
      } catch (err) {
        console.error("Failed to create appointment:", err);
      }
    }
  };

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Book an Appointment</h1>
      {showAlert && (
        <Alert
          variant="success"
          onClose={() => setShowAlert(false)}
          dismissible
        >
          Appointment booked successfully!
        </Alert>
      )}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
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
          </Col>
          <Col md={6}>
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
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formPhone" className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                required
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide your phone number.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formService" className="mb-3">
              <Form.Label>Service Required</Form.Label>
              <Form.Control
                required
                as="select"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select a service...</option>
                <option value="General Checkup">General Checkup</option>
                <option value="Vaccination">Vaccination</option>
                <option value="Dental Care">Dental Care</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Please select a service.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formDate" className="mb-3">
              <Form.Label>Preferred Date</Form.Label>
              <Form.Control
                required
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a preferred date.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formTime" className="mb-3">
              <Form.Label>Preferred Time</Form.Label>
              <Form.Control
                required
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a preferred time.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Button type="submit">Book Appointment</Button>
      </Form>
    </Container>
  );
};

export default BookAppointment;
