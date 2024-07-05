import React from 'react';
import Layout from '../../components/layout/layout';
import { Container } from 'react-bootstrap';
import Services from '../../components/services/services';

const ServicesPage = () => {
  return (
    <Layout>
      <Container>
        <Services />
      </Container>
    </Layout>
  );
};

export default ServicesPage;
