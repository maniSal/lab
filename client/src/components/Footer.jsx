import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#6f42c1', color: 'white', padding: '2rem 0', marginTop: '4rem' }}>
      <Container>
        <Row>
          <Col md={4}>
            <h5>E-Learning</h5>
            <p>Learn from anywhere, at your pace. Empower your future with knowledge.</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
              <li><a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About Us</a></li>
              <li><a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact Us</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <p>Email: support@elearning.com</p>
            <p>Phone: +213 </p>
          </Col>
        </Row>
        <hr style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} />
        <p className="text-center mb-0">&copy; {new Date().getFullYear()} E-Learning. All rights reserved.Gomycode Dz Edition.</p>
      </Container>
    </footer>
  );
};

export default Footer;
