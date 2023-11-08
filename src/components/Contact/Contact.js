import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import ContactSVG from '../assets/New team members-rafiki.svg'
import './Contact.css'

const Contact = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col lg={6}>
          <img src={ContactSVG} alt="Contact" className="img-fluid" />
        </Col>
        <Col lg={6}>
          <h2>Contact Us</h2>
          <p>
            If you have any questions or inquiries, please fill out the form below, and we will get back to you as soon as possible.
          </p>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your Name" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Your Email" />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Your Message" />
            </Form.Group>

            <Button style={{margin: "12px"}} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;