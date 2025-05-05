import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const ContactUs = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-4 shadow" style={{ borderRadius: '1rem' }}>
            <h2 className="text-center mb-4" style={{ color: '#6f42c1' }}>Contact Us</h2>
            <Form>
              <Form.Group className="mb-3" controlId="contactName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="contactEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="contactMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Your message..." />
              </Form.Group>

              <Button
                style={{
                  backgroundColor: '#6f42c1',
                  borderColor: '#6f42c1',
                  borderRadius: '0.5rem',
                  width: '100%',
                  fontWeight: '500',
                }}
                type="submit"
              >
                Send Message
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
