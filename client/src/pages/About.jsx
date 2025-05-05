import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-4 shadow" style={{ borderRadius: '1rem' }}>
            <h2 className="text-center mb-4" style={{ color: "#6f42c1" }}>About Us</h2>
            <p style={{ fontSize: '1.1rem', color: '#6c757d' }}>
              At <span style={{ color: "#6f42c1", fontWeight: 'bold' }}>E-Learning</span>, we believe education should be accessible, flexible, and empowering. Our platform provides learners with the tools they need to grow their skills and reach their potential from anywhere in the world.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#6c757d' }}>
              Our mission is to deliver high-quality online courses tailored to a variety of learning styles and levels. Whether you're just starting or looking to advance, we’re here to support your journey.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#6c757d' }}>
              Built with passion, powered by technology, and led by educators — we’re redefining how people learn in the digital age.
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
