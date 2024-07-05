import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate('/book-appointment');
  };

  return (
    <div className="bg- bg-custom text-center py-5 br-20">
      <Container>
        <h1>Welcome to HealthHub</h1>
        <p>Your health, our priority</p>
        <Button variant="light" className="mt-3" onClick={handleBookAppointmentClick}>
          Book an Appointment
        </Button>
      </Container>
    </div>
  );
};

export default Hero;
