import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { validateEmail } from '../utils/helpers';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleInputChange = (e) => {

      const { target } = e;
      const inputType = target.name;
      const inputValue = target.value;
  

      if (inputType === 'name') {
        setName(inputValue);
      } else if (inputType === 'email') {
        setEmail(inputValue);
      } else {
        setMessage(inputValue);
      }
    };
  
    const handleFormSubmit = (e) => {

      e.preventDefault();
  

      if (!validateEmail(email)) {
        setErrorMessage('Please enter a valid email');


      }

      setName('');
      setEmail('');
      setMessage('');
    };

    return(
<Container fluid className="vh-100 d-flex flex-column page-content">
    <Row className="h-100">
        <Col xs={6} className="d-flex align-items-center justify-content-center">
            <h2 id="Contact-Me">Contact Me</h2>
        </Col>
        <Col xs={6} className="d-flex align-items-center justify-content-center">
    <Form>
      <Form.Group className="mb-3" id="inputGroup-sizing-default">
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder="Enter name" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail" value={email} name="name" onChange={handleInputChange} type="text">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" aria-label="With textarea" placeholder="Message" />
      <Button variant="primary" type="submit" onClick={handleFormSubmit}>
        Submit
      </Button>
    </Form>
    {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
        )}
        </Col>
    </Row>
</Container>
    
    );
}

export default Contact;