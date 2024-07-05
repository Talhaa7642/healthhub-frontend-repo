import React from 'react';
import Hero from '../../components/hero/hero';
import Services from '../../components/services/services';
import Testimonials from '../../components/testimonials/testimonials';
import Layout from '../../components/layout/layout';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Testimonials />
    </Layout>
  );
};

export default Home;