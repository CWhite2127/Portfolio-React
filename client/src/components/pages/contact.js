import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { validateEmail } from '../utils/helpers';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
return(
<Container fluid className="vh-100 d-flex flex-column page-content">
    <Row className="h-100">
        <Col xs={6} className="d-flex align-items-center justify-content-center">
            <h1 id="header">Contact Me</h1>
        </Col>
        <Col xs={6} className="d-flex align-items-center justify-content-center">
    <Form>
      <Form.Group className="mb-3" id="inputGroup-sizing-default">
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder="Enter name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail" name="name" type="text">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" aria-label="With textarea" placeholder="Message" />
      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
        </Col>
    </Row>
</Container>
    
    );
}

export default Contact;